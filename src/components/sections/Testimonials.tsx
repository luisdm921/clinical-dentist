"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

/* ══════════════════════════════════════════════════════════
   PERSONALIZAR: Testimonios de pacientes
   - Cambia nombres, fotos, textos y roles
   - Usa fotos reales de pacientes (con su permiso)
   ══════════════════════════════════════════════════════════ */
const TESTIMONIALS = [
  {
    name: "Ana García López",
    role: "Paciente desde 2020",
    /* PERSONALIZAR: Reemplaza con foto real del paciente */
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    text: "Tenía pánico al dentista desde niña. En DentalCare me trataron con tanta paciencia y cuidado que ahora vengo cada 6 meses sin problema. Mi blanqueamiento quedó increíble — no paro de sonreír.",
    rating: 5,
    highlight: "¡No paro de sonreír!",
    treatment: "Blanqueamiento",
  },
  {
    name: "Roberto Martínez",
    role: "Paciente desde 2019",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    text: "Me pusieron un implante después de perder un diente en un accidente. El resultado es tan natural que nadie nota la diferencia. El equipo es profesional y la tecnología de primer mundo.",
    rating: 5,
    highlight: "Nadie nota la diferencia",
    treatment: "Implante dental",
  },
  {
    name: "Laura Sánchez Ruiz",
    role: "Paciente desde 2022",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    text: "Mis hijos le tenían miedo al dentista hasta que vinimos aquí. La Dra. González tiene una paciencia increíble con los niños. Ahora ellos mismos piden ir. 100% recomendado para familias.",
    rating: 5,
    highlight: "Mis hijos ahora piden ir al dentista",
    treatment: "Odontopediatría",
  },
];

const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(
      () => setActive((p) => (p + 1) % TESTIMONIALS.length),
      6000,
    );
    return () => clearInterval(id);
  }, [autoPlay]);

  const goTo = useCallback((i: number) => {
    setActive(i);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 12000);
  }, []);

  const current = TESTIMONIALS[active];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="badge mb-4">Testimonios Reales</span>
          {/* PERSONALIZAR: Títulos de la sección */}
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
            Lo que Dicen{" "}
            <span className="text-gradient">Nuestros Pacientes</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            +10,000 pacientes confían en nosotros. Estas son algunas de sus
            historias.
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`relative bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-100 transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Quote icon */}
            <FaQuoteLeft className="absolute top-6 left-8 text-primary-100 text-5xl" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-lg" />
                ))}
              </div>

              {/* Highlight */}
              <p className="text-primary-600 font-bold text-lg mb-4">
                &ldquo;{current.highlight}&rdquo;
              </p>

              {/* Body */}
              <p className="text-neutral-600 text-lg md:text-xl leading-relaxed mb-8">
                {current.text}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={current.photo}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-100"
                  />
                  <div>
                    <p className="font-semibold text-neutral-900">
                      {current.name}
                    </p>
                    <p className="text-neutral-400 text-sm">
                      {current.role} · {current.treatment}
                    </p>
                  </div>
                </div>

                {/* Arrows */}
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      goTo(active === 0 ? TESTIMONIALS.length - 1 : active - 1)
                    }
                    className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-primary-600 hover:border-primary-300 transition-all"
                    aria-label="Anterior"
                  >
                    <FaChevronLeft className="text-sm" />
                  </button>
                  <button
                    onClick={() => goTo((active + 1) % TESTIMONIALS.length)}
                    className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-primary-600 hover:border-primary-300 transition-all"
                    aria-label="Siguiente"
                  >
                    <FaChevronRight className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-primary-500"
                    : "w-3 bg-neutral-200 hover:bg-neutral-300"
                }`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>

          {/* Trust bar */}
          <div
            className={`mt-12 flex flex-wrap justify-center gap-8 transition-all duration-500 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {TESTIMONIALS.map((t, i) => (
                  <img
                    key={i}
                    src={t.photo}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1 ml-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FaStar key={i} className="text-amber-400 text-xs" />
                ))}
                <span className="text-neutral-800 font-bold text-sm ml-1">
                  4.9
                </span>
              </div>
              <span className="text-neutral-400 text-xs">
                de 500+ reseñas en Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
