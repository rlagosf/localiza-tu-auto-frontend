const sponsors = [
  { src: "images/avicola_cachagua.png", alt: "Avícola Cachagua", scale: 1.58 },
  { src: "images/conaf.png", alt: "CONAF", scale: 1.12 },
  { src: "images/jotaqu.png", alt: "Jotaqu", scale: 1.55 },
  { src: "images/mansel.png", alt: "Mansel", scale: 1.5 },
  { src: "images/qualitylog.png", alt: "Qualitylog", scale: 4.18 },
  { src: "images/ramirez_aviacion.png", alt: "Ramírez Aviación", scale: 1.58 },
];

// Logo “normalizado” + ajuste fino por logo (scale)
function SponsorLogo({ src, alt, scale = 1 }) {
  return (
    <div
      className="
        flex items-center justify-center flex-none
        h-14 w-32 sm:h-16 sm:w-40 md:h-20 md:w-48 lg:h-24 lg:w-56
        px-2
      "
    >
      <img
        src={src}
        alt={alt}
        className="
          max-h-full max-w-full object-contain
          grayscale brightness-125 opacity-80
          transition-all duration-300
          hover:grayscale-0 hover:opacity-100
          hover:drop-shadow-[0_0_22px_rgba(36,198,255,0.6)]
        "
        style={{ transform: `scale(${scale})` }}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function Sponsors() {
  return (
    <section className="pt-24 pb-10 overflow-hidden">
      {/* Título */}
      <h3
        className="
          text-center
          text-2xl sm:text-3xl
          font-semibold
          text-white
          mb-10
          tracking-wide
          drop-shadow-[0_0_14px_rgba(36,198,255,0.45)]
        "
      >
        NO LO DECIMOS NOSOTROS: ESTAS EMPRESAS YA CONFÍAN EN JD GEOTRACK
      </h3>

      {/* Carrusel infinito real (sin cortes) */}
      <div className="sponsor-marquee h-24 sm:h-28 md:h-32 lg:h-36">
        {/* Lane A */}
        <div className="sponsor-lane sponsor-lane--a">
          <div className="sponsor-track gap-10 sm:gap-14 md:gap-16 lg:gap-20 px-6">
            {[...sponsors, ...sponsors].map((s, i) => (
              <SponsorLogo
                key={`a-${i}`}
                src={s.src}
                alt={s.alt}
                scale={s.scale}
              />
            ))}
          </div>
        </div>

        {/* Lane B (desfasada) */}
        <div className="sponsor-lane sponsor-lane--b" aria-hidden="true">
          <div className="sponsor-track gap-10 sm:gap-14 md:gap-16 lg:gap-20 px-6">
            {[...sponsors, ...sponsors].map((s, i) => (
              <SponsorLogo
                key={`b-${i}`}
                src={s.src}
                alt=""
                scale={s.scale}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tip: ajusta los scale arriba hasta que visualmente queden parejos */}
    </section>
  );
}

export default Sponsors;
