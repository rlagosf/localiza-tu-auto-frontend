import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const BASE = import.meta.env.BASE_URL;
  const phoneDisplay = "+56 9 9529 8775";
  const phoneWa = "56995298775";
  const waMsg =
    "Hola, vengo desde LocalizaTuAuto. Me interesa el Plan Club Beneficiarios ($135.700 mensual) ¿Me puedes ayudar?";
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
                Activa tu beneficio con acceso inmediato a la plataforma de
                rastreo satelital, cortesía del Club de Beneficiarios.
              </p>

              <div className="mt-6 rounded-2xl border border-black/10 bg-[#f6f6f6] p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#1f2f52]/70">
                  Plan más rentable
                </p>

                <p className="mt-2 text-lg md:text-xl font-extrabold text-[#1f2f52] leading-snug">
                  Club beneficiarios{" "}
                  <span className="text-[#1f2f52]">$135.700</span>
                  <span className="text-[#1f2f52]/70 font-bold">/semestral</span>
                </p>

                <div className="mt-4 rounded-xl bg-white border border-black/10 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Columna izquierda */}
                    <div className="p-5 bg-[#f9fafb] flex items-center min-h-[130px]">
                      <div>
                        <p className="text-sm md:text-base font-semibold text-[#1f2f52] leading-snug">
                          6 meses con acceso exclusivo a la plataforma
                        </p>
                        <p className="mt-1 text-xs text-slate-600">
                          Condiciones y cupón se validan al contratar.
                        </p>
                      </div>
                    </div>

                    {/* Columna derecha */}
                    <div className="p-5 border-t md:border-t-0 md:border-l border-black/10 flex flex-col justify-center min-h-[130px]">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex items-center justify-center gap-2
                          rounded-full bg-[#25D366]
                          px-5 py-3 text-[13px] md:text-sm font-bold text-white
                          shadow-[0_18px_35px_rgba(37,211,102,0.22)]
                          hover:opacity-95 transition
                          active:scale-[0.99]
                          w-full md:w-auto
                          whitespace-nowrap
                          leading-none
                          self-start
                        "
                        aria-label={`Hablar por WhatsApp al ${phoneDisplay}`}
                        title={`WhatsApp ${phoneDisplay}`}
                      >
                        <FaWhatsapp className="text-base shrink-0" />
                        <span className="whitespace-nowrap">Hablar por WhatsApp</span>
                      </a>

                      <p className="mt-5 text-sm text-slate-600">
                        Contacto por WhatsApp:{" "}
                        <a
                          href={waLink}
                          target="_blank"
                          rel="noreferrer"
                          className="font-extrabold text-[#1f2f52] hover:underline inline-block mt-2"
                        >
                          {phoneDisplay}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>
    </section>
  );
}