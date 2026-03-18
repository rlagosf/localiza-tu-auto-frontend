import { useMemo, useState, useEffect } from "react";
import { MapPin, Bell, ShieldCheck, Route } from "lucide-react";

const FEATURES = [
  { icon: MapPin, title: "Localización en tiempo real" },
  { icon: Route, title: "Enlace a la policía" },
  { icon: Bell, title: "Alertas instantáneas" },
  { icon: ShieldCheck, title: "Inmovilizador de motor" },
];

export default function Hero() {
  const BASE = import.meta.env.BASE_URL; // "/localiza-tu-auto-frontend/"

  const images = useMemo(
    () => [
      `${BASE}images/alerta-instantanea.webp`,
      `${BASE}images/confianza-auto.webp`,
      `${BASE}images/auto-secure.webp`,
      `${BASE}images/family-secure.webp`,
    ],
    [BASE]
  );

  const [validImages, setValidImages] = useState([]);
  const [idx, setIdx] = useState(0);

  // Validar qué imágenes existen realmente
  useEffect(() => {
    let mounted = true;

    const checkImages = async () => {
      const results = await Promise.all(
        images.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = () => resolve(src);
              img.onerror = () => resolve(null);
            })
        )
      );

      if (mounted) {
        const filtered = results.filter(Boolean);
        setValidImages(filtered);
        setIdx(0);
      }
    };

    checkImages();

    return () => {
      mounted = false;
    };
  }, [images]);

  const current = validImages?.length
    ? validImages[Math.max(0, Math.min(idx, validImages.length - 1))]
    : null;

  // Carrusel automático
  useEffect(() => {
    if (!validImages || validImages.length <= 1) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    const interval = setInterval(() => {
      setIdx((p) => (p + 1) % validImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [validImages]);

  return (
    <section id="hero" className="pt-24 pb-10 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl border border-black/10 shadow-[0_22px_70px_rgba(0,0,0,0.10)] bg-white/95 backdrop-blur">
          {/* Left */}
          <div className="relative p-8 md:p-12">
            <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#1f2f52]/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#f4be32]/12 blur-3xl" />

            <h1 className="relative mt-6 text-3xl md:text-5xl font-light tracking-wide leading-tight uppercase text-[#1f2f52]">
              CON GPS <span className="font-semibold">AUTOTRACKER</span>
            </h1>

            <p className="relative mt-4 text-lg md:text-2xl font-light text-[#1f2f52]/90">
              Tu Vehículo Protegido <span className="text-[#1f2f52]/40">–</span>{" "}
              <span className="font-medium">Atención Personalizada</span>
            </p>

            <p className="relative mt-5 max-w-xl text-sm md:text-base text-slate-600 leading-relaxed">
              Localiza tu auto, ante situaciones de riesgo.
            </p>

            <div className="relative mt-8 flex flex-wrap lg:flex-nowrap items-center gap-2">
              <a
                href="#tienda"
                className="
                  inline-flex items-center justify-center
                  rounded-full bg-[#f4be32]
                  px-5 py-3 text-xs md:text-sm font-extrabold text-black
                  shadow-[0_18px_35px_rgba(244,190,50,0.22)]
                  hover:bg-[#e8b225] transition
                  active:scale-[0.99]
                  whitespace-nowrap
                "
              >
                ACCESO A LA TIENDA
              </a>

              <a
                href="#contact"
                className="
                  inline-flex items-center justify-center
                  rounded-full bg-white
                  px-5 py-3 text-xs md:text-sm font-semibold text-[#1f2f52]
                  border border-[#1f2f52]/20
                  hover:bg-[#1f2f52]/5 transition
                  whitespace-nowrap
                "
              >
                CONTACTO
              </a>

              <a
                href="#plataforma"
                className="
                  inline-flex items-center justify-center
                  rounded-full bg-[#f4be32]
                  px-5 py-3 text-xs md:text-sm font-extrabold text-black
                  shadow-[0_18px_35px_rgba(244,190,50,0.22)]
                  hover:bg-[#e8b225] transition
                  active:scale-[0.99]
                  whitespace-nowrap
                "
              >
                ACCESO A LA PLATAFORMA
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="relative min-h-[340px] lg:min-h-full bg-[#f6f6f6]">
            {current ? (
              <>
                <img
                  key={current}
                  src={current}
                  alt="Imagen hero"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 animate-[fadeIn_900ms_ease-out_forwards]"
                  draggable={false}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <div className="max-w-md">
                  <p className="text-sm font-bold text-[#1f2f52]">
                    No se encontraron imágenes válidas
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Revisa que existan archivos válidos en{" "}
                    <code className="font-mono">public/images</code>.
                  </p>
                </div>
              </div>
            )}

            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; transform: scale(1.01); }
                to   { opacity: 1; transform: scale(1); }
              }
            `}</style>
          </div>
        </div>

        {/* Feature strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
          {FEATURES.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="
                group bg-white/90 backdrop-blur rounded-2xl border border-black/10
                p-4 flex items-center gap-3
                shadow-sm
                hover:bg-white hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                transition
              "
            >
              <div
                className="
                  w-11 h-11 rounded-xl bg-white border border-black/10
                  flex items-center justify-center text-[#1f2f52]
                  group-hover:scale-[1.03] transition
                "
              >
                <Icon size={18} />
              </div>

              <p className="text-sm font-extrabold text-[#1f2f52] leading-tight">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}