"use client";

import { FaWhatsapp } from "react-icons/fa";

/* ══════════════════════════════════════════════════════════
   PERSONALIZAR: Número de WhatsApp y mensaje predeterminado
   ══════════════════════════════════════════════════════════ */
const PHONE = "525512345678";
const MESSAGE = "Hola, quiero agendar una cita dental. ¿Tienen disponibilidad?";

const WhatsAppButton = () => {
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-full p-3 md:p-4 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group animate-pulse hover:animate-none"
      aria-label="Agendar cita por WhatsApp"
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
      <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-neutral-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¿Listo para tu cita? ¡Escríbenos!
      </span>
    </a>
  );
};

export default WhatsAppButton;
