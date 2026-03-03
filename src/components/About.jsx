export default function About() {
  const BASE = import.meta.env.BASE_URL; // e.g. "/localiza-tu-auto-frontend/"

  return (
    <section id="about" className="py-16 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card institucional */}
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_22px_70px_rgba(0,0,0,0.08)]">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1f2f52]">
              Localiza tu auto con confianza
            </h2>

            <p className="mt-4 text-[#334155] leading-relaxed">
              Somos un equipo de profesionales especializados en tecnología satelital y seguridad automotriz,
              con experiencia en el mercado GPS a nivel nacional e internacional. Entregamos soluciones seguras
              y confiables para proteger tu vehículo y darte tranquilidad en todo momento.
            </p>

            {/* Badges store */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center rounded-2xl border border-black/10 bg-[#f6f6f6] p-2 hover:bg-white hover:shadow-sm transition"
                aria-label="Descargar en App Store"
                title="Download on the App Store"
              >
                <img
                  src={`${BASE}images/appstore-badge.png`}
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                  draggable={false}
                />
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center rounded-2xl border border-black/10 bg-[#f6f6f6] p-2 hover:bg-white hover:shadow-sm transition"
                aria-label="Descargar en Google Play"
                title="Get it on Google Play"
              >
                <img
                  src={`${BASE}images/googleplay-badge.png`}
                  alt="Get it on Google Play"
                  className="h-10 w-auto"
                  draggable={false}
                />
              </a>

              <span className="text-xs text-slate-500">
                *Enlaces a tiendas se configurarán cuando el cliente entregue las URLs finales.
              </span>
            </div>
          </div>

          {/* Card acceso plataforma */}
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_22px_70px_rgba(0,0,0,0.08)]">
            <h3 className="text-xl md:text-2xl font-extrabold text-[#1f2f52]">
              Acceso plataforma
            </h3>

            <p className="mt-3 text-[#334155] leading-relaxed">
              Accede a tu plataforma para monitoreo y gestión desde cualquier dispositivo.
              Este enlace es temporal y se reemplazará por la URL oficial del cliente.
            </p>

            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="
                mt-6 inline-flex items-center justify-center
                rounded-full bg-[#1f2f52]
                px-7 py-3.5 text-sm font-extrabold text-white
                hover:opacity-90 transition
                shadow-[0_18px_35px_rgba(31,47,82,0.20)]
              "
            >
              ACCESO PLATAFORMA
            </a>

            {/* Pills */}
            <div className="relative mt-8 flex flex-wrap gap-3">
              <Pill>Soporte 24/7</Pill>
              <Pill>Suscripción anual</Pill>
              <Pill>Respuesta rápida</Pill>
              <Pill>Enlace a la policia</Pill>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Nota: cambia el href por la URL real cuando el cliente la confirme.
            </p>
          </div>
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