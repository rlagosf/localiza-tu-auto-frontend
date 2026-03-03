import {
  Smartphone,
  Monitor,
  Timer,
  Repeat,
  Power,
  PlayCircle,
  ShieldCheck,
} from "lucide-react";

const CARDS = [
  {
    icon: Smartphone,
    title: "Localización por celular (SMS o llamada)",
    bullets: [
      "Envías un SMS o llamas a la unidad GPS instalada.",
      "Respuesta inmediata con: coordenadas, velocidad, fecha/hora y enlace Google Maps.",
    ],
  },
  {
    icon: Monitor,
    title: "Localización por computador o tablet",
    bullets: [
      "Abres Google Maps (u otro navegador).",
      "Pegas las coordenadas recibidas y ves el mapa + ubicación en tiempo real.",
    ],
  },
  {
    icon: Timer,
    title: "Localización automática programada",
    bullets: [
      "Se activa con un SMS.",
      "Envía ubicación cada 60 segundos, solo 5 veces (1 ciclo).",
    ],
  },
  {
    icon: Repeat,
    title: "Localización automática continua",
    bullets: [
      "Defines el tiempo de rastreo con un SMS.",
      "Rastreo configurable en: segundos, minutos, horas o días.",
    ],
  },
  {
    icon: Power,
    title: "Inmovilizar vehículo (corta corriente)",
    bullets: [
      "Ante intento de robo, envías un SMS al equipo GPS.",
      "El sistema detiene el motor y confirma: 'Stop Engine' + datos + enlace Maps.",
    ],
  },
  {
    icon: PlayCircle,
    title: "Reactivar el vehículo (movilizar)",
    bullets: [
      "El vehículo queda inmovilizado hasta recibir la orden del usuario.",
      "Confirmación: 'Resume (Motor activado)'.",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Encabezado sobrio (coherente con Hero) */}
        <div className="relative rounded-3xl border border-black/10 bg-white/95 backdrop-blur shadow-[0_22px_70px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* acento sutil */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#1f2f52]/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#f4be32]/12 blur-3xl" />

          <div className="relative p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1f2f52]/5 border border-[#1f2f52]/10 px-4 py-2">
              <ShieldCheck className="text-[#1f2f52]" size={16} />
              <span className="text-xs md:text-[13px] font-semibold tracking-wide text-[#1f2f52]">
                Servicios y funcionamiento
              </span>
            </div>

            <h2 className="mt-5 text-2xl md:text-3xl font-extrabold text-[#1f2f52]">
              Seguridad automotriz con tecnología satelital inteligente
            </h2>

            <p className="mt-3 text-[#334155] leading-relaxed max-w-4xl">
              <span className="font-semibold text-[#1f2f52]">Localiza Tu Auto</span> es una alianza de profesionales en tecnología
              satelital y electrónica automotriz, con experiencia en el mercado GPS. Ofrecemos una solución inteligente y
              preventiva para proteger automóviles, camiones y flotas, combinando monitoreo y respuesta ante situaciones de
              riesgo. Nuestra visión es liderar la seguridad automotriz con tecnología integrada y un servicio confiable, respaldado
              por atención personalizada, capacitación y postventa de alto nivel.
            </p>

            {/* Cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CARDS.map(({ icon: Icon, title, bullets }) => (
                <article
                  key={title}
                  className="
                    group rounded-2xl border border-black/10
                    bg-white/90 backdrop-blur
                    p-5 shadow-sm
                    hover:bg-white hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                    transition
                  "
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="
                        w-11 h-11 rounded-xl bg-white border border-black/10
                        flex items-center justify-center text-[#1f2f52]
                        group-hover:scale-[1.03] transition
                      "
                    >
                      <Icon size={18} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-extrabold text-[#1f2f52] leading-snug">
                        {title}
                      </h3>

                      <ul className="mt-2 space-y-1.5 text-sm text-slate-600 leading-relaxed">
                        {bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#f4be32] flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA discreto (opcional, sobrio) */}
            <div className="mt-8 flex flex-wrap gap-3">
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
                Solicitar información
              </a>

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
                Ver planes en la tienda
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}