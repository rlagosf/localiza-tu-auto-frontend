import { useEffect, useState } from "react";
import { catalogosService } from "../services/catalogos";
import { contactoService } from "../services/contacto";

function Contact() {
  // ---- Catálogos (todos vienen normalizados como {id, nombre}) ----
  const [regiones, setRegiones] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [comunas, setComunas] = useState([]);

  const [tiposCliente, setTiposCliente] = useState([]);
  const [tiposVehiculo, setTiposVehiculo] = useState([]);
  const [objetivos, setObjetivos] = useState([]);
  const [usaGpsOpciones, setUsaGpsOpciones] = useState([]);
  const [plazos, setPlazos] = useState([]);

  // ---- UI feedback ----
  const [enviando, setEnviando] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [okMsg, setOkMsg] = useState("");

  // ---- Formulario ----
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    regionId: "",
    provinciaId: "",
    comunaId: "",
    tipoClienteId: "",
    cantidadVehiculos: "",
    tipoVehiculoId: "",
    objetivoId: "",
    usaGpsId: "",
    plazoId: "",
    detalle: "",
    aceptaContacto: false,
  });

  // =========================
  // Helper para obtener nombre “humano” desde catálogos normalizados
  // =========================
  const pickNombre = (arr, id) => {
    if (!id) return null;
    const it = arr.find((x) => Number(x.id) === Number(id));
    return it?.nombre ?? null;
  };

  // ---------- Cargar catálogos base ----------
  useEffect(() => {
    const cargarCatalogos = async () => {
      try {
        const [
          regionesData,
          tipoClienteData,
          tipoVehiculoData,
          objetivoData,
          usaGpsData,
          plazoData,
        ] = await Promise.all([
          catalogosService.getRegiones(),
          catalogosService.getTipoCliente(),
          catalogosService.getTipoVehiculo(),
          catalogosService.getObjetivoRastreo(),
          catalogosService.getGpsUso(),
          catalogosService.getPlazo(),
        ]);

        setRegiones(regionesData || []);
        setTiposCliente(tipoClienteData || []);
        setTiposVehiculo(tipoVehiculoData || []);
        setObjetivos(objetivoData || []);
        setUsaGpsOpciones(usaGpsData || []);
        setPlazos(plazoData || []);
      } catch (err) {
        console.error("Error cargando catálogos:", err);
        setErrorMsg("No se pudieron cargar los catálogos. Intenta nuevamente.");
      }
    };

    cargarCatalogos();
  }, []);

  // ---------- Región → cargar provincias ----------
  useEffect(() => {
    const cargarProvincias = async () => {
      if (!form.regionId) {
        setProvincias([]);
        setComunas([]);
        setForm((prev) => ({ ...prev, provinciaId: "", comunaId: "" }));
        return;
      }

      try {
        const data = await catalogosService.getProvincias(form.regionId);
        setProvincias(data || []);
        setComunas([]);
        setForm((prev) => ({ ...prev, provinciaId: "", comunaId: "" }));
      } catch (err) {
        console.error("Error cargando provincias:", err);
        setErrorMsg("No se pudieron cargar las provincias.");
      }
    };

    cargarProvincias();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.regionId]);

  // ---------- Provincia → cargar comunas ----------
  useEffect(() => {
    const cargarComunas = async () => {
      if (!form.provinciaId) {
        setComunas([]);
        setForm((prev) => ({ ...prev, comunaId: "" }));
        return;
      }

      try {
        const data = await catalogosService.getComunas(form.provinciaId);
        setComunas(data || []);
        setForm((prev) => ({ ...prev, comunaId: "" }));
      } catch (err) {
        console.error("Error cargando comunas:", err);
        setErrorMsg("No se pudieron cargar las comunas.");
      }
    };

    cargarComunas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.provinciaId]);

  // ---------- Handlers ----------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setErrorMsg("");
    setOkMsg("");

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validar = () => {
    if (!form.nombre.trim()) return "Ingresa tu nombre o razón social.";
    if (!form.correo.trim()) return "Ingresa un correo.";
    if (!form.telefono.trim()) return "Ingresa un teléfono / WhatsApp.";
    if (!form.tipoClienteId) return "Selecciona un tipo de cliente.";
    if (!form.cantidadVehiculos || Number(form.cantidadVehiculos) < 1)
      return "La cantidad de vehículos debe ser 1 o más.";
    if (!form.aceptaContacto)
      return "Debes aceptar ser contactado para enviar el formulario.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setOkMsg("");

    const err = validar();
    if (err) {
      setErrorMsg(err);
      return;
    }

    setEnviando(true);

    // ===== nombres (para el correo) =====
    const region_nombre = pickNombre(regiones, form.regionId);
    const provincia_nombre = pickNombre(provincias, form.provinciaId);
    const comuna_nombre = pickNombre(comunas, form.comunaId);

    const tipo_cliente_nombre = pickNombre(tiposCliente, form.tipoClienteId);
    const tipo_vehiculo_nombre = pickNombre(tiposVehiculo, form.tipoVehiculoId);
    const objetivo_nombre = pickNombre(objetivos, form.objetivoId);
    const usa_gps_nombre = pickNombre(usaGpsOpciones, form.usaGpsId);
    const plazo_nombre = pickNombre(plazos, form.plazoId);

    // payload: DB + nombres humanos para email
    const payload = {
      nombre_razon_social: form.nombre.trim(),
      correo: form.correo.trim(),
      telefono: form.telefono.trim(),

      region_id: form.regionId ? Number(form.regionId) : null,
      provincia_id: form.provinciaId ? Number(form.provinciaId) : null,
      comuna_id: form.comunaId ? Number(form.comunaId) : null,

      // nombres “humanos”
      region_nombre,
      provincia_nombre,
      comuna_nombre,

      tipo_cliente_id: Number(form.tipoClienteId),
      cantidad_vehiculos: Number(form.cantidadVehiculos),

      tipo_vehiculo_id: form.tipoVehiculoId ? Number(form.tipoVehiculoId) : null,
      objetivo_rastreo_id: form.objetivoId ? Number(form.objetivoId) : null,
      usa_gps_id: form.usaGpsId ? Number(form.usaGpsId) : null,
      plazo_implementacion_id: form.plazoId ? Number(form.plazoId) : null,

      // nombres negocio
      tipo_cliente_nombre,
      tipo_vehiculo_nombre,
      objetivo_nombre,
      usa_gps_nombre,
      plazo_nombre,

      detalle_requerimiento: form.detalle?.trim() || null,

      // el backend valida esto
      acepta_contacto: true,
    };

    try {
      const res = await contactoService.enviarFormulario(payload);
      setOkMsg(res?.message || "✅ Solicitud recibida. Te contactaremos pronto.");

      setForm({
        nombre: "",
        correo: "",
        telefono: "",
        regionId: "",
        provinciaId: "",
        comunaId: "",
        tipoClienteId: "",
        cantidadVehiculos: "",
        tipoVehiculoId: "",
        objetivoId: "",
        usaGpsId: "",
        plazoId: "",
        detalle: "",
        aceptaContacto: false,
      });

      setProvincias([]);
      setComunas([]);
    } catch (err2) {
      const msg = err2?.error || "❌ Ocurrió un error al enviar el formulario.";
      setErrorMsg(msg);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contact" className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* COLUMNA IZQUIERDA */}
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-left mb-3">
            Formulario de contacto
          </h2>

          <p className="text-sm sm:text-base text-white/80 mb-4">
            Cuéntanos cómo es tu flota y qué necesitas controlar. Te responderemos con una propuesta ajustada a tu operación.
          </p>

          {errorMsg ? (
            <div className="mb-5 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {errorMsg}
            </div>
          ) : null}

          {okMsg ? (
            <div className="mb-5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              {okMsg}
            </div>
          ) : null}

          <form className="grid md:grid-cols-2 gap-5 text-sm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Nombre o razón social"
              className="bg-slate-900/85 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#24C6FF]/70 focus:ring-1 focus:ring-[#24C6FF]/40 transition"
            />

            <input
              type="email"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              placeholder="Correo electrónico"
              className="bg-slate-900/85 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#24C6FF]/70 focus:ring-1 focus:ring-[#24C6FF]/40 transition"
            />

            <input
              type="text"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              placeholder="Teléfono / WhatsApp"
              className="bg-slate-900/85 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#24C6FF]/70 focus:ring-1 focus:ring-[#24C6FF]/40 transition"
            />

            <select
              name="regionId"
              value={form.regionId}
              onChange={handleChange}
              className="bg-slate-900/85 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-[#24C6FF]/70 focus:ring-1 focus:ring-[#24C6FF]/40 transition"
            >
              <option value="" disabled>Región</option>
              {regiones.map((r) => (
                <option key={r.id} value={r.id}>{r.nombre}</option>
              ))}
            </select>

            <select
              name="provinciaId"
              value={form.provinciaId}
              onChange={handleChange}
              disabled={!form.regionId || provincias.length === 0}
              className="bg-slate-900/85 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-[#24C6FF]/70 focus:ring-1 focus:ring-[#24C6FF]/40 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="" disabled>Provincia</option>
              {provincias.map((p) => (
                <option key={p.id} value={p.id}>{p.nombre}</option>
              ))}
            </select>

            <select
              name="comunaId"
              value={form.comunaId}
              onChange={handleChange}
              disabled={!form.provinciaId || comunas.length === 0}
              className="bg-slate-900/85 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-[#24C6FF]/70 focus:ring-1 focus:ring-[#24C6FF]/40 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="" disabled>Comuna</option>
              {comunas.map((c) => (
                <option key={c.id} value={c.id}>{c.nombre}</option>
              ))}
            </select>

            <select
              name="tipoClienteId"
              value={form.tipoClienteId}
              onChange={handleChange}
              className="bg-slate-900/85 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-[#24C6FF]/70 focus:ring-1 focus:ring-[#24C6FF]/40 transition"
            >
              <option value="" disabled>Tipo de cliente</option>
              {tiposCliente.map((t) => (
                <option key={t.id} value={t.id}>{t.nombre}</option>
              ))}
            </select>

            <input
              type="number"
              name="cantidadVehiculos"
              value={form.cantidadVehiculos}
              onChange={handleChange}
              placeholder="Cantidad de vehículos"
              className="bg-slate-900/85 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#24C6FF]/70 focus:ring-1 focus:ring-[#24C6FF]/40 transition [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />

            <select
              name="tipoVehiculoId"
              value={form.tipoVehiculoId}
              onChange={handleChange}
              className="md:col-span-2 bg-slate-900/85 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-[#24C6FF]/70 focus:ring-1 focus:ring-[#24C6FF]/40 transition"
            >
              <option value="" disabled>Tipo de vehículos</option>
              {tiposVehiculo.map((tv) => (
                <option key={tv.id} value={tv.id}>{tv.nombre}</option>
              ))}
            </select>

            <select
              name="objetivoId"
              value={form.objetivoId}
              onChange={handleChange}
              className="md:col-span-2 bg-slate-900/85 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-[#24C6FF]/70 focus:ring-1 focus:ring-[#24C6FF]/40 transition"
            >
              <option value="" disabled>Objetivo principal del rastreo</option>
              {objetivos.map((o) => (
                <option key={o.id} value={o.id}>{o.nombre}</option>
              ))}
            </select>

            <select
              name="usaGpsId"
              value={form.usaGpsId}
              onChange={handleChange}
              className="bg-slate-900/85 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-[#24C6FF]/70 focus:ring-1 focus:ring-[#24C6FF]/40 transition"
            >
              <option value="" disabled>¿Actualmente usas GPS?</option>
              {usaGpsOpciones.map((g) => (
                <option key={g.id} value={g.id}>{g.nombre}</option>
              ))}
            </select>

            <select
              name="plazoId"
              value={form.plazoId}
              onChange={handleChange}
              className="bg-slate-900/85 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-[#24C6FF]/70 focus:ring-1 focus:ring-[#24C6FF]/40 transition"
            >
              <option value="" disabled>¿Para cuándo necesitas implementar?</option>
              {plazos.map((p) => (
                <option key={p.id} value={p.id}>{p.nombre}</option>
              ))}
            </select>

            <textarea
              name="detalle"
              value={form.detalle}
              onChange={handleChange}
              placeholder="Detalle de tu requerimiento (rutas, horarios, zonas, turnos, etc.)"
              className="md:col-span-2 bg-slate-900/85 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder:text-slate-500 min-h-[120px] resize-none focus:outline-none focus:border-[#24C6FF]/70 focus:ring-1 focus:ring-[#24C6FF]/40 transition"
            />

            <label className="md:col-span-2 flex items-start gap-2 text-xs sm:text-[0.8rem] text-white/70 cursor-pointer">
              <input
                type="checkbox"
                name="aceptaContacto"
                checked={form.aceptaContacto}
                onChange={handleChange}
                className="mt-[3px] h-3 w-3 rounded border border-slate-600 bg-slate-900 accent-[#24C6FF]"
              />
              <span>Acepto ser contactado por JD GeoTrack para recibir una cotización.</span>
            </label>

            <button
              type="submit"
              disabled={enviando}
              className="md:col-span-2 flex items-center justify-center rounded-lg px-4 py-2 font-semibold bg-slate-950 border border-slate-700 text-slate-100 tracking-wide transition hover:bg-slate-900 hover:border-[#24C6FF] hover:text-[#24C6FF] hover:shadow-[0_0_20px_rgba(36,198,255,0.6)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {enviando ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>

        {/* COLUMNA DERECHA — Logos */}
        <div className="w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <div className="border border-slate-700 rounded-2xl px-10 py-8 flex items-center justify-center shadow-[0_18px_40px_rgba(0,0,0,0.65)] h-56 bg-transparent transition-all duration-300 hover:border-[#24C6FF] hover:shadow-[0_0_30px_rgba(36,198,255,0.7)] hover:-translate-y-2">
              <img src="images/logo-knox.png" alt="Logo Knox" className="h-full w-auto object-contain" />
            </div>

            <div className="border border-slate-700 rounded-2xl px-10 py-8 flex items-center justify-center shadow-[0_18px_40px_rgba(0,0,0,0.65)] h-56 bg-transparent transition-all duration-300 hover:border-[#24C6FF] hover:shadow-[0_0_30px_rgba(36,198,255,0.7)] hover:-translate-y-2">
              <img src="images/logo-wialon.png" alt="Logo Wialon" className="h-full w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
