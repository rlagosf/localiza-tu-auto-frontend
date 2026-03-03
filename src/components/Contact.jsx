import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const BASE = import.meta.env.BASE_URL; // "/localiza-tu-auto-frontend/"
  const phoneDisplay = "+56 9 9529 8775";
  const phoneWa = "56995298775"; // sin +, sin espacios
  const waMsg =
    "Hola, vengo desde LocalizaTuAuto. Me interesa el Plan Club Beneficiarios ($189.900 anual). ¿Me puedes ayudar?";
  const waLink = `https://wa.me/${phoneWa}?text=${encodeURIComponent(waMsg)}`;

  return (
    <section id="contact" className="py-16 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Imagen */}
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-[#f6f6f6] shadow-[0_22px_70px_rgba(0,0,0,0.08)]">
            <img
              src={`${BASE}images/contrata-servicio.png`}
              alt="Contrata servicio"
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>

          {/* Card Plan + WhatsApp */}
          <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10 shadow-[0_22px_70px_rgba(0,0,0,0.08)] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#1f2f52]/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#f4be32]/12 blur-3xl" />

            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1f2f52]">
                Utiliza tu cupón de descuento
              </h2>

              <p className="mt-3 text-[#334155] leading-relaxed">
                Activa tu beneficio y accede a la plataforma de monitoreo con el plan más rentable del Club Beneficiarios.
              </p>

              <div className="mt-6 rounded-2xl border border-black/10 bg-[#f6f6f6] p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#1f2f52]/70">
                  Plan más rentable
                </p>

                <p className="mt-2 text-lg md:text-xl font-extrabold text-[#1f2f52] leading-snug">
                  Club beneficiarios{" "}
                  <span className="text-[#1f2f52]">$189.900</span>
                  <span className="text-[#1f2f52]/70 font-bold">/anual</span>
                </p>

                <div className="mt-4 rounded-xl bg-white border border-black/10 overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="p-4">
                      <p className="text-xs font-semibold text-[#1f2f52]/70 uppercase tracking-[0.22em]">
                        Valor ref. mensual
                      </p>
                      <p className="mt-1 text-2xl font-extrabold text-[#1f2f52]">
                        $15.825
                      </p>
                    </div>

                    <div className="p-4 border-t sm:border-t-0 sm:border-l border-black/10 bg-[#f9fafb]">
                      <p className="text-sm font-semibold text-[#1f2f52]">
                        12 meses con acceso exclusivo a la plataforma
                      </p>
                      <p className="mt-1 text-xs text-slate-600">
                        Condiciones y cupón se validan al contratar.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex items-center justify-center gap-2
                      rounded-full bg-[#25D366]
                      px-6 py-3 text-sm font-extrabold text-white
                      shadow-[0_18px_35px_rgba(37,211,102,0.22)]
                      hover:opacity-95 transition
                      active:scale-[0.99]
                    "
                    aria-label={`Hablar por WhatsApp al ${phoneDisplay}`}
                    title={`WhatsApp ${phoneDisplay}`}
                  >
                    <FaWhatsapp className="text-lg" />
                    Hablar por WhatsApp
                  </a>
                </div>

                <p className="mt-4 text-sm text-slate-600">
                  Contacto directo:{" "}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="font-extrabold text-[#1f2f52] hover:underline"
                  >
                    {phoneDisplay}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>
    </section>
  );
}