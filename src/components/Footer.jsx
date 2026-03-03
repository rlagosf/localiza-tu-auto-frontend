import { Link } from "react-scroll";

export default function Footer() {
  const navItems = [
    { to: "hero", label: "Inicio" },
    { to: "about", label: "Nosotros" },
    { to: "services", label: "Servicios" },
    { to: "contact", label: "Contacto" },
  ];

  return (
    <footer className="bg-transparent">
      <div className="max-w-[1280px] mx-auto px-4 py-12">
        {/* Línea superior */}
        <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

        <div className="pt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Branding */}
          <div className="min-w-0">
            <div className="text-[#1f2f52] font-extrabold text-lg md:text-xl">
              GPS Autotracker
            </div>
            <div className="text-[#1f2f52]/70 text-sm mt-1">
              Seguridad automotriz · Monitoreo satelital · Soporte 24/7
            </div>
          </div>

          {/* Navegación (estilo navbar, pero libre) */}
          <nav className="w-full lg:w-auto">
            <ul className="flex flex-wrap items-center gap-2">
              {navItems.map((it) => (
                <li key={it.to}>
                  <Link
                    to={it.to}
                    smooth
                    duration={520}
                    offset={-90}
                    spy
                    className="
                      cursor-pointer select-none
                      px-5 py-2.5 rounded-xl
                      text-[13px] md:text-sm font-semibold
                      text-[#1f1f1f]
                      border border-black/10 bg-[#f6f6f6]
                      transition-all duration-200
                      hover:bg-white hover:text-[#22365a]
                      hover:shadow-sm
                      active:scale-[0.98]
                    "
                    activeClass="!bg-white !text-[#22365a] shadow-[0_10px_25px_rgba(0,0,0,0.10)]"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Barra inferior */}
        <div className="mt-10 pt-6 border-t border-black/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-[#1f2f52]/70">
            © {new Date().getFullYear()} Localiza Tu Auto · Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-xs text-[#1f2f52]/70 hover:text-[#1f2f52] transition"
            >
              Términos
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-xs text-[#1f2f52]/70 hover:text-[#1f2f52] transition"
            >
              Privacidad
            </a>
          </div>
        </div>

        {/* Línea final sutil */}
        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>
    </footer>
  );
}