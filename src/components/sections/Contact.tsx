"use client";

import { useRef, useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaCalendarCheck,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

/* ══════════════════════════════════════════════════════════
   PERSONALIZAR: Datos de contacto del consultorio
   ══════════════════════════════════════════════════════════ */

/* PERSONALIZAR: URL de Setmore — se usa como iframe embebido
   El parámetro ?lang=es fuerza la interfaz en español */
const SETMORE_URL = "https://pawsandbytes.setmore.com/luis?lang=es";

const CONTACT_INFO = [
  {
    icon: FaPhoneAlt,
    title: "Llámanos",
    lines: ["+52 (55) 1234-5678", "+52 (55) 8765-4321"],
    action: "tel:+525512345678",
    actionLabel: "Llamar ahora",
    gradient: "from-primary-500 to-primary-600",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    lines: ["Respuesta en minutos", "Lun - Sáb: 9:00 - 20:00"],
    action:
      "https://wa.me/525512345678?text=Hola%2C%20quiero%20agendar%20una%20cita",
    actionLabel: "Escribir ahora",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    lines: ["citas@dentalcare.com", "info@dentalcare.com"],
    action: "mailto:citas@dentalcare.com",
    actionLabel: "Enviar email",
    gradient: "from-accent-500 to-accent-600",
  },
];

const Contact = () => {
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
      id="contacto"
      className="section-padding bg-neutral-900 relative overflow-hidden"
    >
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-1.5 bg-white/10 text-primary-300 font-medium text-sm px-4 py-1.5 rounded-full border border-white/10 mb-4">
            <FaCalendarCheck className="text-xs" /> Agenda tu Cita
          </span>
          {/* PERSONALIZAR: Títulos */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Tu Nueva Sonrisa{" "}
            <span className="text-gradient-warm">Empieza Aquí</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Selecciona el servicio, elige fecha y hora, y confirma tu cita en
            segundos. ¡Así de fácil!
          </p>
        </div>

        {/* Contact Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "50ms" }}
        >
          {CONTACT_INFO.map((card, i) => (
            <a
              key={i}
              href={card.action}
              target={card.action.startsWith("http") ? "_blank" : undefined}
              rel={
                card.action.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <card.icon className="text-white text-xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">{card.title}</h3>
              {card.lines.map((line, j) => (
                <p key={j} className="text-neutral-400 text-sm">
                  {line}
                </p>
              ))}
              <span className="inline-flex items-center gap-1 text-primary-400 text-sm font-medium mt-3 group-hover:text-primary-300 transition-colors">
                {card.actionLabel}
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>

        {/* Setmore Booking Widget + Map grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Map / Location */}
          <div
            className={`lg:col-span-2 transition-all duration-500 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col">
              {/* PERSONALIZAR: URL del mapa de Google con la dirección de tu consultorio */}
              <div className="flex-1 min-h-[250px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6279471266634!2d-99.16551332471395!3d19.426778981890475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sReforma%20222!5e0!3m2!1ses!2smx!4v1706999000000!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter:
                      "invert(90%) hue-rotate(180deg) brightness(.9) contrast(.9)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0"
                />
              </div>
              {/* PERSONALIZAR: Dirección y horarios del consultorio */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">
                      Av. Reforma 222, Piso 5, Consultorio 501
                    </p>
                    <p className="text-neutral-400 text-sm">
                      Col. Juárez, 06600 — CDMX
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Horario</p>
                    <p className="text-neutral-400 text-sm">
                      Lun – Vie: 9:00 – 19:00
                    </p>
                    <p className="text-neutral-400 text-sm">
                      Sáb: 9:00 – 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Setmore Booking Widget */}
          <div
            className={`lg:col-span-3 transition-all duration-500 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-6 pb-3">
                <h3 className="text-2xl font-bold text-white mb-1">
                  Agenda tu Cita Online
                </h3>
                <p className="text-neutral-400 text-sm">
                  Selecciona servicio, fecha y hora. Confirmación instantánea.
                </p>
              </div>
              {/* PERSONALIZAR: El iframe carga tu página de reservas de Setmore */}
              <div className="w-full" style={{ minHeight: "580px" }}>
                <iframe
                  src={SETMORE_URL}
                  title="Agenda tu cita — DentalCare"
                  width="100%"
                  height="580"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
