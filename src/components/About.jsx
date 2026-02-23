const About = () => {
  return (
    <section
      id="about"
      className="
        w-full
        px-4 lg:px-8
        py-20
        flex justify-center
        pt-20
      "
    >
      <div
        className="
          max-w-[1200px] w-full
          grid lg:grid-cols-2 gap-12
          items-center
        "
      >
        {/* LOGO + AURA */}
        <div
          className="
            relative flex justify-center
          "
        >
          {/* Glow detrás del logo */}
          <div
            className="
              absolute inset-0
              rounded-full
              blur-3xl opacity-40
              bg-[#24C6FF]
            "
          />

          <img
            src="images/logo_negro.png"
            alt="JD GeoTrack"
            className="
              relative
              w-52 lg:w-64
              drop-shadow-[0_0_20px_rgba(36,198,255,0.50)]
              select-none
            "
          />
        </div>

        {/* TEXTO */}
        <div className="text-center lg:text-left">
          <p className="text-[0.70rem] lg:text-xs tracking-[0.25em] uppercase text-white/60">
            Quiénes somos
          </p>

          <h2
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-semibold
              text-white
              leading-tight
              mt-2
            "
          >
            Tecnología que protege<br />
            <span className="text-[#24C6FF]">lo que más importa</span>
          </h2>

          <p
            className="
              mt-5
              text-white/75
              text-sm sm:text-base
              leading-relaxed
              max-w-lg
              text-justify
            "
          >
            En <span className="text-white">JD GeoTrack</span> combinamos 
            tecnología de monitoreo GPS con instalación profesional y soporte 
            dedicado. Nuestra misión es entregar control, seguridad y eficiencia 
            tanto a conductores particulares como a empresas que gestionan flotas.
          </p>

          <p
            className="
              mt-4
              text-white/60
              text-xs sm:text-sm
              leading-relaxed
              text-justify
            "
          >
            Más que rastreo: una plataforma diseñada para decisiones inteligentes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
