import { useMemo, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const BASE = import.meta.env.BASE_URL; // "/localiza-tu-auto-frontend/"

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const items = useMemo(
    () => [
      { to: "hero", label: "Inicio" },
      { to: "about", label: "Nosotros" },
      { to: "services", label: "Servicios" },
      { to: "contact", label: "Contacto" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className={[
          "max-w-[1280px] mx-auto px-3 md:px-5 transition-all duration-300",
          scrolled ? "pt-2" : "pt-4",
        ].join(" ")}
      >
        <div
          className={[
            "rounded-2xl backdrop-blur-md border transition-all duration-300",
            "bg-white/80",
            scrolled
              ? "shadow-[0_18px_45px_rgba(0,0,0,0.18)] border-black/10"
              : "shadow-[0_10px_30px_rgba(0,0,0,0.12)] border-black/10",
          ].join(" ")}
        >
          <div className="h-16 md:h-[72px] flex items-center justify-between px-4 md:px-5">
            {/* Logo */}
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={`${BASE}images/logo-auto-track.png`}
                alt="AutoTracker"
                className="h-9 md:h-11 w-auto select-none"
                draggable={false}
              />

              <div className="hidden lg:block leading-tight">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#2f3a52]/75 font-semibold">
                  Beneficiarios
                </p>
                <p className="text-sm font-extrabold text-[#2f3a52] -mt-0.5">
                  Monitoreo y Seguridad GPS
                </p>
              </div>
            </div>

            {/* Desktop menu */}
            <ul className="hidden md:flex items-center gap-1 lg:gap-2">
              {items.map((it) => (
                <li key={it.to}>
                  <Link
                    to={it.to}
                    smooth
                    duration={520}
                    offset={-90}
                    spy
                    className="
                      cursor-pointer select-none
                      px-4 lg:px-5 py-2.5 rounded-xl
                      text-[13px] lg:text-sm font-semibold text-[#1f1f1f]
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

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="
                md:hidden w-11 h-11 rounded-xl
                border border-black/10 bg-white/85
                text-[#2f3a52]
                hover:bg-white transition
                inline-flex items-center justify-center
                shadow-sm
              "
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={[
              "md:hidden overflow-hidden transition-all duration-300",
              open ? "max-h-[520px] border-t border-black/10" : "max-h-0",
            ].join(" ")}
          >
            <ul className="px-4 py-4 space-y-2 bg-white/90 backdrop-blur">
              {items.map((it) => (
                <li key={it.to}>
                  <Link
                    to={it.to}
                    smooth
                    duration={520}
                    offset={-88}
                    spy
                    onClick={() => setOpen(false)}
                    className="
                      block cursor-pointer select-none
                      rounded-xl px-4 py-3
                      text-sm font-semibold text-[#1f1f1f]
                      bg-white/70 border border-black/10
                      hover:bg-white hover:text-[#22365a]
                      hover:shadow-sm
                      transition
                    "
                    activeClass="!bg-white !text-[#22365a] shadow-sm"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-4 pb-4 bg-white/90 backdrop-blur">
              <div className="rounded-xl bg-white/70 border border-black/10 px-4 py-3">
                <p className="text-xs text-[#2f3a52]/80 font-semibold tracking-wide">
                  Soporte 24/7 · Seguridad automotriz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}