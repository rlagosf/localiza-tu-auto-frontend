export default function About() {
  const BASE = import.meta.env.BASE_URL; // e.g. "/localiza-tu-auto-frontend/"

  return (
    <section id="about" className="py-16 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Card institucional */}
          <div className="min-h-[345px] lg:h-[345px] rounded-3xl border border-black/10 bg-white p-6 md:p-8 shadow-[0_22px_70px_rgba(0,0,0,0.08)] flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1f2f52] text-center lg:text-left">
                Localiza tu auto con confianza
              </h2>

              <p className="mt-4 text-[#334155] leading-relaxed text-center lg:text-left">
                Somos un equipo de profesionales especializados en tecnología satelital y seguridad automotriz,
                con experiencia en el mercado GPS a nivel nacional e internacional. Entregamos soluciones seguras
                y confiables para proteger tu vehículo y darte tranquilidad en todo momento.
              </p>
            </div>

            {/* Badges store */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-[#f6f6f6] p-2 hover:bg-white hover:shadow-sm transition max-w-full"
                aria-label="Descargar en App Store"
                title="Download on the App Store"
              >
                <img
                  src={`${BASE}images/appstore-badge.png`}
                  alt="Download on the App Store"
                  className="h-9 md:h-10 w-auto max-w-full object-contain"
                  draggable={false}
                />
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-[#f6f6f6] p-2 hover:bg-white hover:shadow-sm transition max-w-full"
                aria-label="Descargar en Google Play"
                title="Get it on Google Play"
              >
                <img
                  src={`${BASE}images/googleplay-badge.png`}
                  alt="Get it on Google Play"
                  className="h-9 md:h-10 w-auto max-w-full object-contain"
                  draggable={false}
                />
              </a>
            </div>

            <span className="mt-4 block text-center lg:text-left text-xs text-slate-500 leading-relaxed">
              *Enlaces a tiendas se configurarán cuando el cliente entregue las URLs finales.
            </span>
          </div>

          {/* Imagen lateral */}
          <div className="min-h-[260px] lg:h-[345px] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_22px_70px_rgba(0,0,0,0.08)]">
            <img
              src={`${BASE}images/Imagen2.jpg`}
              alt="Plataforma de monitoreo vehicular"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}