import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const loginRef = useRef(null);

  const navItems = [
    { to: "hero", label: "Inicio" },
    { to: "services", label: "Servicios" },
    { to: "about", label: "Nosotros" },
    { to: "contact", label: "Contacto" },
    { to: "login", label: "Iniciar sesión" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (loginRef.current && !loginRef.current.contains(e.target)) {
        setLoginOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // color base según scroll
  const baseTextColor = scrolled ? "text-[#24C6FF]" : "text-white";

  const navLinkClasses = `
    cursor-pointer transition-all duration-300 
    pb-1 border-b border-transparent
    ${baseTextColor}
    hover:border-[#24C6FF]
    hover:text-[#24C6FF]
    hover:drop-shadow-[0_0_6px_#24C6FF]
  `;

  const socialIconClasses = `
    ${baseTextColor}
    hover:text-[#24C6FF]
    transition
    text-lg
  `;

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        text-white
        transition-colors duration-300
        ${scrolled ? "bg-black/90 backdrop-blur-sm border-b border-slate-800/80" : "bg-transparent"}
      `}
    >
      <div className="max-w-[1550px] mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo + Redes al lado */}
          <div className="flex items-center gap-4">
            <img
              src="images/logo_fondos_oscuros.png"
              alt="JYD Geotrack"
              className="h-8 lg:h-10 w-auto select-none"
            />

            {/* Redes sociales junto al logo (ocultas en muy pequeño, visibles desde sm) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://www.facebook.com/jd.geotrack"
                target="_blank"
                rel="noreferrer"
                className={socialIconClasses}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/jdgeotrack"
                target="_blank"
                rel="noreferrer"
                className={socialIconClasses}
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/56954025867"
                target="_blank"
                rel="noreferrer"
                className={socialIconClasses}
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/in/rodrigo-lagos-fernandez-403a33173/"
                target="_blank"
                rel="noreferrer"
                className={socialIconClasses}
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Menú desktop */}
          <ul
            className="
              hidden md:flex items-center
              gap-5 lg:gap-7
              text-[0.55rem] lg:text-[0.62rem]
              uppercase tracking-[0.20em]
              font-light
            "
          >
            {navItems.map((item) =>
              item.to !== "login" ? (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className={navLinkClasses}
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li
                  key={item.to}
                  className="relative"
                  ref={loginRef}
                >
                  {/* Botón Iniciar sesión, misma fuente que el resto, levemente ajustado hacia abajo */}
                  <button
                    type="button"
                    onClick={() => setLoginOpen((prev) => !prev)}
                    className={`
                      ${navLinkClasses}
                      text-[0.55rem] lg:text-[0.62rem]
                      uppercase tracking-[0.20em]
                      font-light
                      bg-transparent border-0 appearance-none
                      mt-[5px]
                    `}
                  >
                    {item.label}
                  </button>

                  {/* Dropdown Knox / Wialon */}
                  {loginOpen && (
                    <div
                      className="
                        absolute right-0 mt-3
                        bg-slate-900/95 backdrop-blur-sm
                        border border-[#24C6FF]/40
                        rounded-xl p-4
                        shadow-[0_0_25px_rgba(36,198,255,0.35)]
                        w-56
                        flex flex-col gap-4
                      "
                    >
                      {/* Knox */}
                      <a
                        href="https://knoxgps.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex flex-col items-center justify-center gap-2
                          bg-transparent border border-slate-700
                          rounded-lg px-3 py-3
                          hover:border-[#24C6FF]
                          hover:shadow-[0_0_20px_rgba(36,198,255,0.6)]
                          transition
                        "
                      >
                        <img
                          src="images/logo-knox.png"
                          alt="Knox GPS"
                          className="h-8 w-auto object-contain"
                        />
                        <span className="text-white text-xs font-medium tracking-wide text-center">
                          Knox GPS
                        </span>
                      </a>

                      {/* Wialon */}
                      <a
                        href="https://hosting.wialon.us/?lang=es"
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex flex-col items-center justify-center gap-2
                          bg-transparent border border-slate-700
                          rounded-lg px-3 py-3
                          hover:border-[#24C6FF]
                          hover:shadow-[0_0_20px_rgba(36,198,255,0.6)]
                          transition
                        "
                      >
                        <img
                          src="images/logo-wialon.png"
                          alt="Wialon Hosting"
                          className="h-8 w-auto object-contain"
                        />
                        <span className="text-white text-xs font-medium tracking-wide text-center">
                          Wialon Hosting
                        </span>
                      </a>
                    </div>
                  )}
                </li>
              )
            )}
          </ul>

          {/* Hamburguesa */}
          <button
            className="
              md:hidden inline-flex items-center justify-center 
              p-2 
              rounded-md hover:bg-white/10 focus:outline-none 
              focus:ring-2 focus:ring-white/40
            "
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${
                  isOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 space-y-3 text-[0.65rem] uppercase tracking-[0.2em] font-light">
            {navItems.map((item) =>
              item.to !== "login" ? (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className="
                      block py-2 cursor-pointer 
                      transition-all
                      text-white
                      hover:text-[#24C6FF]
                    "
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.to}>
                  <details className="group">
                    <summary
                      className="
                        py-2 cursor-pointer 
                        text-white 
                        hover:text-[#24C6FF]
                      "
                    >
                      {item.label}
                    </summary>

                    <div className="flex flex-col gap-4 mt-3">
                      <a
                        href="https://knoxgps.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="
                          border border-slate-700 
                          rounded-lg px-3 py-2 
                          text-white text-xs 
                          hover:border-[#24C6FF]
                          text-center
                        "
                      >
                        Knox GPS
                      </a>
                      <a
                        href="https://hosting.wialon.us/?lang=es"
                        target="_blank"
                        rel="noreferrer"
                        className="
                          border border-slate-700 
                          rounded-lg px-3 py-2 
                          text-white text-xs 
                          hover:border-[#24C6FF]
                          text-center
                        "
                      >
                        Wialon Hosting
                      </a>
                    </div>
                  </details>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
