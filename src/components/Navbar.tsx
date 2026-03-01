"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";

/* ══════════════════════════════════════════════════════════
   PERSONALIZAR: Links de navegación y número de teléfono
   ══════════════════════════════════════════════════════════ */
const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Sobre Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

/* PERSONALIZAR: Número de teléfono para llamadas */
const PHONE_NUMBER = "+525512345678";
/* PERSONALIZAR: URL de Setmore para reservas online
   El parámetro ?lang=es fuerza la interfaz en español */
const BOOKING_URL = "https://pawsandbytes.setmore.com/luis?lang=es";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* ── PERSONALIZAR: Logo del consultorio ── */}
            <a href="#inicio" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-lg font-bold leading-tight transition-colors ${
                    scrolled ? "text-neutral-800" : "text-white"
                  }`}
                >
                  DentalCare
                </span>
                <span
                  className={`text-[10px] font-medium tracking-widest uppercase transition-colors ${
                    scrolled ? "text-primary-600" : "text-primary-200"
                  }`}
                >
                  Clínica Dental
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium transition-colors duration-300 hover:text-primary-500 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled ? "text-neutral-600" : "text-white/90"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              {/* Teléfono */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-neutral-500 hover:text-primary-600"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <FaPhoneAlt className="text-xs" />
                {/* PERSONALIZAR: Número visible */}
                (55) 1234-5678
              </a>

              {/* CTA → scroll al calendario embebido */}
              <a
                href="#contacto"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                  scrolled
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700"
                    : "bg-white/15 backdrop-blur-sm text-white border border-white/25 hover:bg-white/25"
                }`}
              >
                <FaCalendarCheck className="text-sm" />
                Agendar Cita
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-2xl z-[60]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
            >
              {isOpen ? (
                <FaTimes className="text-white" />
              ) : (
                <FaBars
                  className={scrolled ? "text-neutral-700" : "text-white"}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-primary-900/98 backdrop-blur-lg z-[55]">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-white/80 hover:text-white text-2xl bg-white/10 rounded-full p-2"
            aria-label="Cerrar menú"
          >
            <FaTimes />
          </button>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-3xl font-bold hover:text-primary-300 transition-colors"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="mt-4 btn-primary text-lg"
            >
              <FaCalendarCheck />
              Agendar Cita
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
