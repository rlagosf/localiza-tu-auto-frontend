import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-transparent">
      <div
        className="
          max-w-6xl mx-auto px-4 py-5
          flex flex-col gap-4
          sm:flex-row sm:items-center sm:justify-between
          pt-28
        "
      >
        {/* Texto potenciado y más prominente */}
        <div 
          className="
            flex flex-col sm:flex-row sm:items-center sm:gap-4 
            text-center sm:text-left mx-auto sm:mx-0
          "
        >
          <span 
            className="
              text-white 
              font-semibold 
              drop-shadow-[0_0_6px_rgba(0,0,0,0.35)]
            "
          >
            © {year} JyD GeoTrack. Todos los derechos reservados.
          </span>

          <span 
            className="
              text-white/80 
              font-medium
              drop-shadow-[0_0_8px_rgba(0,0,0,0.25)]
            "
          >
            Monitoreo GPS vehicular · Flotas · Seguridad en ruta
          </span>
        </div>

        {/* Redes sociales con hover blanco + glow celeste oscuro */}
        <div className="flex justify-center sm:justify-end gap-4">
          
          {/* Facebook */}
          <a
            href="https://www.facebook.com/jd.geotrack"
            target="_blank"
            rel="noreferrer"
            className="
              text-black
              transition-all duration-300
              text-lg
              hover:text-white
              hover:drop-shadow-[0_0_16px_rgba(36,198,255,0.45)]
            "
          >
            <FaFacebookF />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/jdgeotrack"
            target="_blank"
            rel="noreferrer"
            className="
              text-black
              transition-all duration-300
              text-lg
              hover:text-white
              hover:drop-shadow-[0_0_16px_rgba(36,198,255,0.45)]
            "
          >
            <FaInstagram />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/56954025867"
            target="_blank"
            rel="noreferrer"
            className="
              text-black
              transition-all duration-300
              text-lg
              hover:text-white
              hover:drop-shadow-[0_0_16px_rgba(36,198,255,0.45)]
            "
          >
            <FaWhatsapp />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rodrigo-lagos-fernandez-403a33173/"
            target="_blank"
            rel="noreferrer"
            className="
              text-black
              transition-all duration-300
              text-lg
              hover:text-white
              hover:drop-shadow-[0_0_16px_rgba(36,198,255,0.45)]
            "
          >
            <FaLinkedinIn />
          </a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
