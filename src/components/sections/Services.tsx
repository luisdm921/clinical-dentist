"use client";

import { useRef, useState, useEffect } from "react";
import {
  FaTooth,
  FaTeethOpen,
  FaMagic,
  FaUserMd,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

/* ══════════════════════════════════════════════════════════
   PERSONALIZAR: Servicios del consultorio
   - Cambia los íconos, títulos, descripciones y precios
   ══════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    icon: FaTooth,
    title: "Limpieza Dental Profunda",
    description:
      "Elimina sarro y manchas con tecnología ultrasónica. Previene enfermedades periodontales y mejora tu aliento desde la primera sesión.",
    tag: "Más popular",
    gradient: "from-primary-500 to-primary-600",
    price: "Desde $599",
  },
  {
    icon: FaMagic,
    title: "Blanqueamiento Profesional",
    description:
      "Hasta 8 tonos más blanco en una sola sesión. Resultados visibles inmediatos con tecnología LED de última generación.",
    tag: "Resultados rápidos",
    gradient: "from-secondary-500 to-secondary-600",
    price: "Desde $2,499",
  },
  {
    icon: FaTeethOpen,
    title: "Ortodoncia Invisible",
    description:
      "Alinea tus dientes sin brackets metálicos. Alineadores transparentes cómodos que nadie nota y puedes retirar para comer.",
    tag: "Sin brackets",
    gradient: "from-violet-500 to-purple-600",
    price: "Desde $15,000",
  },
  {
    icon: FaUserMd,
    title: "Implantes Dentales",
    description:
      "Recupera piezas perdidas con implantes de titanio de grado médico. Aspecto natural, función completa y duración de por vida.",
    tag: "Garantía de por vida",
    gradient: "from-accent-500 to-accent-600",
    price: "Desde $12,000",
  },
];

/* PERSONALIZAR: Número de WhatsApp para consultas sobre servicios */
const WHATSAPP_NUMBER = "525512345678";
const buildWhatsAppURL = (service: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, me interesa el servicio de ${service}. ¿Podrían darme más información?`,
  )}`;
const WHATSAPP_VALORACION = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola, no estoy seguro qué tratamiento necesito. ¿Podría agendar una valoración gratuita?",
)}`;

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="servicios"
      className="section-padding bg-neutral-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="badge mb-4">Nuestros Servicios</span>
          {/* PERSONALIZAR: Títulos de la sección */}
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
            Tratamientos que{" "}
            <span className="text-gradient">Transforman Sonrisas</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Desde limpiezas preventivas hasta implantes avanzados, ofrecemos
            soluciones completas con la última tecnología y sin dolor.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl border border-neutral-100 p-7 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1 hover:border-primary-200 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Tag */}
              <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">
                {service.tag}
              </span>

              {/* Icon */}
              <div
                className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="text-white text-2xl" />
              </div>

              <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Price */}
              <p className="text-primary-600 font-bold text-lg mb-4">
                {service.price}
              </p>

              <a
                href={buildWhatsAppURL(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-800 transition-colors group/link"
              >
                <FaWhatsapp className="text-sm" />
                Consultar este servicio
                <FaArrowRight className="text-xs transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-14 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          <p className="text-neutral-400 text-sm mb-4">
            ¿No estás seguro qué tratamiento necesitas?
          </p>
          <a
            href={WHATSAPP_VALORACION}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaWhatsapp className="text-lg" />
            Escríbenos — Te Orientamos Gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
