"use client";

import { useState, useEffect } from "react";
import {
  FaCalendarCheck,
  FaShieldAlt,
  FaClock,
  FaStar,
} from "react-icons/fa";

/* ══════════════════════════════════════════════════════════
   PERSONALIZAR: Estadísticas y textos del hero
   ══════════════════════════════════════════════════════════ */
const STATS = [
  { icon: FaStar, value: "4.9★", label: "Google Reviews" },
  { icon: FaClock, value: "15+", label: "Años de Experiencia" },
  { icon: FaShieldAlt, value: "10K+", label: "Pacientes Satisfechos" },
];

/* PERSONALIZAR: URL de Setmore para agendar cita
   El parámetro ?lang=es fuerza la interfaz en español */
const CTA_URL = "https://pawsandbytes.setmore.com/luis?lang=es";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── PERSONALIZAR: Imagen de fondo del hero ──
          Reemplaza la URL con una foto de tu clínica o equipo dental */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80"
          alt="Consultorio dental moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/85 via-primary-900/75 to-secondary-900/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent" />
      </div>

      {/* Decorative blurs (desktop only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-20 right-20 w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-32 left-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 transition-all duration-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <span className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse" />
            {/* PERSONALIZAR: Texto del badge */}
            <span className="text-white/90 text-sm font-medium">
              Atención Dental de Primer Nivel — Agenda Hoy
            </span>
          </div>

          {/* ── PERSONALIZAR: Título principal ── */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 transition-all duration-500 delay-75 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Sonríe con <span className="text-gradient-warm">Confianza</span>
            <br className="hidden sm:block" /> Cada Día
          </h1>

          {/* ── PERSONALIZAR: Subtítulo / propuesta de valor ── */}
          <p
            className={`text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed transition-all duration-500 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Tratamientos dentales con tecnología de vanguardia, cero dolor y
            resultados que se notan desde la primera cita. Tu{" "}
            <strong className="text-white">
              nueva sonrisa te está esperando
            </strong>
            .
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-500 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* CTA principal → scroll al calendario embebido */}
            <a href="#contacto" className="btn-primary text-lg">
              <FaCalendarCheck />
              Agendar Cita — Es Gratis
            </a>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-wrap gap-6 transition-all duration-500 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-3"
              >
                <stat.icon className="text-secondary-300 text-lg" />
                <div>
                  <p className="text-white font-bold text-lg leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-xs">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-[fadeIn_0.6s_ease-out_1.5s] opacity-0 [animation-fill-mode:forwards]">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-white/50 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-1 bg-white/60 rounded-full mt-2 animate-[bounce_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
