import { useMemo, useState, useEffect } from "react";
import { MapPin, Bell, ShieldCheck, Route } from "lucide-react";

/**
 * ✅ Opción 1 (public): array manual de imágenes .webp
 * Las rutas deben ser /images/... (sin /public).
 */
const WEBP_IMAGES = [
  "/images/alerta-instantanea.webp",
  "/images/confianza-auto.webp",
  "/images/historial-rutas.webp",
  "/images/inmovilizador-motor.webp",
  "/images/localizacion-tiempo-real.webp",
];

const FEATURES = [
  { icon: MapPin, title: "Localización en tiempo real" },
  { icon: Route, title: "Historial de rutas" },
  { icon: Bell, title: "Alertas instantáneas" },
  { icon: ShieldCheck, title: "Inmovilizador de motor" },
];

export default function Hero() {
  const images = useMemo(() => WEBP_IMAGES, []);
  const [idx, setIdx] = useState(0);

  const current = images?.length
    ? images[Math.max(0, Math.min(idx, images.length - 1))]
    : null;

  // Carrusel automático
  useEffect(() => {
    if (!images || images.length <= 1) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    const interval = setInterval(() => {
      setIdx((p) => (p + 1) % images.length);
    }, 4500); // ajusta velocidad aquí

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section id="hero" className="pt-24 pb-10 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl border border-black/10 shadow-[0_22px_70px_rgba(0,0,0,0.10)] bg-white/95 backdrop-blur">
          {/* Left (sobrio: blanco + texto navy) */}
          <div className="relative p-8 md:p-12">
            {/* acento sutil */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#1f2f52]/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#f4be32]/12 blur-3xl" />

            {/* badge */}
            <div className="relative inline-flex items-center gap-2 rounded-full bg-[#1f2f52]/5 border border-[#1f2f52]/10 px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-[#f4be32]" />
              <span className="text-xs md:text-[13px] font-semibold tracking-wide text-[#1f2f52]">
                GPS Autotracker · Beneficiarios SMU
              </span>
            </div>

            <h1 className="relative mt-6 text-3xl md:text-5xl font-light tracking-wide leading-tight uppercase text-[#1f2f52]">
              CON GPS <span className="font-semibold">AUTOTRACKER</span>
            </h1>

            <p className="relative mt-4 text-lg md:text-2xl font-light text-[#1f2f52]/90">
              Tu Vehículo Protegido <span className="text-[#1f2f52]/40">–</span>{" "}
              <span className="font-medium">Atención Personalizada</span>
            </p>

            <p className="relative mt-5 max-w-xl text-sm md:text-base text-slate-600 leading-relaxed">
              Monitorea, recibe alertas y actúa rápido ante situaciones de riesgo. Tecnología y soporte para que
              tú manejes la tranquilidad (y no al revés).
            </p>

            <div className="relative mt-8 flex flex-wrap gap-3">
              <a
                href="#tienda"
                className="
                  inline-flex items-center justify-center
                  rounded-full bg-[#f4be32]
                  px-7 py-3.5 text-sm font-extrabold text-black
                  shadow-[0_18px_35px_rgba(244,190,50,0.22)]
                  hover:bg-[#e8b225] transition
                  active:scale-[0.99]
                "
              >
                ACCESO A LA TIENDA
              </a>

              <a
                href="#contact"
                className="
                  inline-flex items-center justify-center
                  rounded-full bg-white
                  px-7 py-3.5 text-sm font-semibold text-[#1f2f52]
                  border border-[#1f2f52]/20
                  hover:bg-[#1f2f52]/5 transition
                "
              >
                CONTACTO
              </a>
            </div>

            {/* mini “trust” (sobrio) */}
            <div className="relative mt-8 flex flex-wrap gap-3">
              <Pill>Soporte 24/7</Pill>
              <Pill>Suscripción anual</Pill>
              <Pill>Respuesta rápida</Pill>
            </div>
          </div>

          {/* Right image (carrusel automático .webp) */}
          <div className="relative min-h-[340px] lg:min-h-full bg-[#f6f6f6]">
            {current ? (
              <>
                <img
                  key={current}
                  src={current}
                  alt="Imagen hero"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 animate-[fadeIn_900ms_ease-out_forwards]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <div className="max-w-md">
                  <p className="text-sm font-bold text-[#1f2f52]">
                    No se encontraron imágenes .webp
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Revisa que existan archivos en <code className="font-mono">public/images</code> y que el array{" "}
                    <code className="font-mono">WEBP_IMAGES</code> tenga rutas correctas{" "}
                    <code className="font-mono">/images/...</code>.
                  </p>
                </div>
              </div>
            )}

            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; transform: scale(1.01); }
                to   { opacity: 1; transform: scale(1); }
              }
            `}</style>
          </div>
        </div>

        {/* Feature strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
          {FEATURES.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="
                group bg-white/90 backdrop-blur rounded-2xl border border-black/10
                p-4 flex items-center gap-3
                shadow-sm
                hover:bg-white hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                transition
              "
            >
              <div
                className="
                  w-11 h-11 rounded-xl bg-white border border-black/10
                  flex items-center justify-center text-[#1f2f52]
                  group-hover:scale-[1.03] transition
                "
              >
                <Icon size={18} />
              </div>

              <p className="text-sm font-extrabold text-[#1f2f52] leading-tight">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#1f2f52]/5 border border-[#1f2f52]/10 px-4 py-2 text-xs font-semibold text-[#1f2f52]/85">
      {children}
    </span>
  );
}