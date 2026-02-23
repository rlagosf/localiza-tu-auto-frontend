import { useEffect, useState } from "react";
import { Link } from "react-scroll";

// Cada slide con mensaje
const SLIDES = [
  { src: "images/1.png", title: "Monitoreo preciso para tu flota", subtitle: "Visualiza recorridos y tiempo en ruta con un solo vistazo." },
  { src: "images/2.png", title: "Seguridad para vehículos particulares", subtitle: "Recibe alertas ante movimientos no autorizados." },
  { src: "images/3.png", title: "Control centralizado", subtitle: "Administra todos tus vehículos desde una sola plataforma." },
  { src: "images/4.png", title: "Reportes claros y accionables", subtitle: "Toma decisiones con datos, no con suposiciones." },
  { src: "images/5.png", title: "Cobertura nacional", subtitle: "Instalaciones profesionales y soporte cercano." },
  { src: "images/6.png", title: "Tecnología confiable", subtitle: "Equipos GPS robustos, pensados para trabajo diario." },
  { src: "images/7.png", title: "Tu flota, bajo control", subtitle: "Reduce riesgos y mejora la gestión operacional." },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const active = SLIDES[current];

  return (
    <section id="hero" className="pt-24 md:pt-28 w-full px-6 lg:px-12 mb-20">
      <div
        className="
          max-w-[1500px]
          mx-auto
          grid lg:grid-cols-2
          gap-14
          items-center
        "
      >
        {/* Columna de texto */}
        <div className="space-y-5">
          <p className="text-[0.70rem] lg:text-xs tracking-[0.25em] uppercase text-white/70">
            Monitoreo GPS Vehicular
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            Control total de tus{" "}
            <span className="text-[#24C6FF]">vehículos en tiempo real</span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-base text-white/80 max-w-lg text-justify">
            JD Geotrack instala y configura sistemas GPS vehiculares para flotas y vehículos particulares.
            Visualiza recorridos, alertas y reportes en una plataforma moderna, segura y pensada para la gestión operativa.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            {/* Botón: ir al formulario de contacto */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80} // compensa el navbar fijo
              className="
                inline-flex items-center justify-center
                px-5 sm:px-6 py-2.5
                rounded-full
                bg-[#24C6FF]
                text-[#001624]
                text-xs sm:text-sm
                tracking-[0.18em]
                uppercase font-light
                shadow-[0_0_18px_rgba(36,198,255,0.45)]
                hover:bg-white
                transition-all duration-300
                cursor-pointer
              "
            >
              Solicitar cotización
            </Link>

            {/* Botón: ir a servicios */}
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-80}
              className="
                inline-flex items-center justify-center
                px-5 sm:px-6 py-2.5
                rounded-full
                border border-white/40
                text-xs sm:text-sm
                tracking-[0.18em]
                uppercase font-light
                text-white
                hover:bg-white/10 hover:border-white/80
                transition-all duration-300
                cursor-pointer
              "
            >
              Ver servicios
            </Link>
          </div>
        </div>

        {/* Carrusel */}
        <div className="relative flex flex-col items-center lg:items-end">
          <div
            className="
              relative
              w-full
              max-w-[600px]
              aspect-square
              mx-auto lg:mx-0
              rounded-[2.2rem]
              overflow-hidden
              border border-white/10
              shadow-[0_25px_55px_rgba(0,0,0,0.55)]
              bg-[#00334F]
            "
          >
            {SLIDES.map((slide, index) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.title}
                className={`
                  absolute inset-0
                  w-full h-full
                  object-cover
                  transition-opacity duration-700 ease-out
                  ${index === current ? "opacity-100" : "opacity-0"}
                `}
              />
            ))}

            {/* Overlay suave */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 pointer-events-none" />

            {/* Texto sobre la imagen */}
            <div className="absolute left-4 bottom-4 sm:left-5 sm:bottom-5 max-w-[78%]">
              <div className="bg-black/55 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 inline-block">
                <h2 className="text-[0.72rem] sm:text-[0.80rem] lg:text-sm font-semibold text-white">
                  {active.title}
                </h2>
                <p className="text-[0.60rem] sm:text-[0.68rem] lg:text-[0.72rem] text-white/80 leading-snug">
                  {active.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Enunciado bajo el carrusel, centrado respecto al carrusel */}
          <div className="mt-4 w-full max-w-[600px] mx-auto lg:mx-0">
            <p className="text-[0.70rem] sm:text-[0.75rem] text-white/70 text-center">
              Imágenes referenciales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
