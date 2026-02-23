import { LuCar, LuRoute, LuShieldCheck } from "react-icons/lu";

export default function Services() {
  return (
    <section
      id="services"
      className="
        w-full
        px-4 lg:px-8
        pt-28 pb-20 mb-24
      "
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Título sección */}
        <div className="text-center mb-10">
          <p className="text-[0.70rem] lg:text-xs tracking-[0.25em] uppercase text-white/60">
            Lo que hacemos
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
            Nuestros servicios
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Soluciones de geolocalización diseñadas para vehículos particulares,
            pequeñas empresas y grandes flotas que necesitan control real de su operación.
          </p>
        </div>

        {/* Tarjetas de servicios */}
        <div
          className="
            grid gap-5 sm:gap-6
            md:grid-cols-3
          "
        >
          {/* Servicio 1 */}
          <article
            className="
              group relative overflow-hidden
              rounded-2xl
              bg-slate-900/85
              border border-slate-700
              p-6 sm:p-7
              shadow-[0_18px_40px_rgba(0,0,0,0.65)]
              transition-all duration-300
              hover:-translate-y-1.5
              hover:shadow-[0_22px_55px_rgba(0,0,0,0.9)]
              hover:border-[#24C6FF]/70
            "
          >
            {/* brillo hover */}
            <div
              className="
                pointer-events-none absolute inset-0
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-gradient-to-b from-[#24C6FF]/12 via-transparent to-[#24C6FF]/10
              "
            />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div
                className="
                  flex items-center justify-center
                  w-14 h-14 sm:w-16 sm:h-16
                  rounded-full
                  bg-slate-800
                  border border-[#24C6FF]/60
                  text-[#24C6FF]
                  mb-4
                  shadow-[0_0_18px_rgba(36,198,255,0.4)]
                "
              >
                <LuCar className="text-2xl sm:text-3xl" />
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                Vehículos particulares
              </h3>
              <p className="text-[0.78rem] sm:text-[0.85rem] text-white/75 leading-relaxed">
                Instalación discreta de GPS para autos y motos. Seguimiento en
                tiempo real, historial de rutas y alertas ante movimientos no
                autorizados.
              </p>
            </div>
          </article>

          {/* Servicio 2 */}
          <article
            className="
              group relative overflow-hidden
              rounded-2xl
              bg-slate-900/85
              border border-slate-700
              p-6 sm:p-7
              shadow-[0_18px_40px_rgba(0,0,0,0.65)]
              transition-all duration-300
              hover:-translate-y-1.5
              hover:shadow-[0_22px_55px_rgba(0,0,0,0.9)]
              hover:border-[#24C6FF]/70
            "
          >
            <div
              className="
                pointer-events-none absolute inset-0
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-gradient-to-b from-[#24C6FF]/12 via-transparent to-[#24C6FF]/10
              "
            />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div
                className="
                  flex items-center justify-center
                  w-14 h-14 sm:w-16 sm:h-16
                  rounded-full
                  bg-slate-800
                  border border-[#24C6FF]/60
                  text-[#24C6FF]
                  mb-4
                  shadow-[0_0_18px_rgba(36,198,255,0.4)]
                "
              >
                <LuRoute className="text-2xl sm:text-3xl" />
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                Gestión de flotas
              </h3>
              <p className="text-[0.78rem] sm:text-[0.85rem] text-white/75 leading-relaxed">
                Panel centralizado para camiones, vans y vehículos de servicio.
                Rutas, detenciones, tiempos en terreno y reportes exportables
                para optimizar tu operación diaria.
              </p>
            </div>
          </article>

          {/* Servicio 3 */}
          <article
            className="
              group relative overflow-hidden
              rounded-2xl
              bg-slate-900/85
              border border-slate-700
              p-6 sm:p-7
              shadow-[0_18px_40px_rgba(0,0,0,0.65)]
              transition-all duration-300
              hover:-translate-y-1.5
              hover:shadow-[0_22px_55px_rgba(0,0,0,0.9)]
              hover:border-[#24C6FF]/70
            "
          >
            <div
              className="
                pointer-events-none absolute inset-0
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-gradient-to-b from-[#24C6FF]/12 via-transparent to-[#24C6FF]/10
              "
            />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div
                className="
                  flex items-center justify-center
                  w-14 h-14 sm:w-16 sm:h-16
                  rounded-full
                  bg-slate-800
                  border border-[#24C6FF]/60
                  text-[#24C6FF]
                  mb-4
                  shadow-[0_0_18px_rgba(36,198,255,0.4)]
                "
              >
                <LuShieldCheck className="text-2xl sm:text-3xl" />
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                Soporte y continuidad
              </h3>
              <p className="text-[0.78rem] sm:text-[0.85rem] text-white/75 leading-relaxed">
                Mantención de equipos, diagnóstico remoto y apoyo en terreno.
                Nos aseguramos de que tu sistema GPS se mantenga operativo y confiable.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
