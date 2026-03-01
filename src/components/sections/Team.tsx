"use client";

import { useRef, useState, useEffect } from "react";
import {
  FaGraduationCap,
  FaAward,
  FaHeart,
  FaCalendarCheck,
} from "react-icons/fa";

/* ══════════════════════════════════════════════════════════
   PERSONALIZAR: Datos del equipo dental
   - Cambia foto, nombre, certificaciones y descripción
   ══════════════════════════════════════════════════════════ */
const DOCTOR = {
  /* PERSONALIZAR: Reemplaza con foto real del dentista */
  photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  name: "Dra. María González Herrera",
  title: "Cirujana Dentista — Especialista en Implantología",
  bio: `Con más de 15 años de experiencia y formación en las mejores universidades del país, la Dra. González lidera nuestro equipo con un enfoque en odontología mínimamente invasiva y centrada en el paciente. Su misión: que cada persona salga del consultorio con una sonrisa que les cambie la vida.`,
  credentials: [
    {
      icon: FaGraduationCap,
      text: "Maestría en Implantología Avanzada — UNAM",
    },
    {
      icon: FaAward,
      text: "Certificación en Ortodoncia Invisible — Invisalign",
    },
    { icon: FaHeart, text: "Miembro de la Asociación Dental Mexicana" },
    { icon: FaGraduationCap, text: "Diplomado en Estética Dental — UCLA" },
  ],
};

/* PERSONALIZAR: Valores del consultorio */
const VALUES = [
  {
    number: "15+",
    label: "Años de Experiencia",
    description: "Formación continua y práctica constante",
  },
  {
    number: "10K+",
    label: "Pacientes Atendidos",
    description: "Sonrisas transformadas con éxito",
  },
  {
    number: "98%",
    label: "Recomiendan",
    description: "Nos recomiendan a familiares y amigos",
  },
  {
    number: "0",
    label: "Dolor",
    description: "Técnicas avanzadas de sedación consciente",
  },
];

/* PERSONALIZAR: URL de Setmore para agendar con la Dra.
   El parámetro ?lang=es fuerza la interfaz en español */
const CTA_URL = "https://pawsandbytes.setmore.com/luis?lang=es";

const Team = () => {
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
      id="nosotros"
      className="section-padding bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="badge mb-4">Nuestro Equipo</span>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
            Profesionales que{" "}
            <span className="text-gradient">Cuidan de Ti</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Conoce al equipo detrás de tu sonrisa. Formación de primer nivel,
            tecnología de punta y un trato genuinamente humano.
          </p>
        </div>

        {/* Doctor card */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          {/* Photo */}
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl opacity-50 group-hover:opacity-70 blur-xl transition-opacity duration-500" />
            <img
              src={DOCTOR.photo}
              alt={DOCTOR.name}
              className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
              {DOCTOR.name}
            </h3>
            <p className="text-primary-600 font-medium mb-5">{DOCTOR.title}</p>
            <p className="text-neutral-600 leading-relaxed mb-8 text-lg">
              {DOCTOR.bio}
            </p>

            {/* Credentials */}
            <ul className="space-y-3 mb-8">
              {DOCTOR.credentials.map((cred, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <cred.icon className="text-primary-600 text-sm" />
                  </span>
                  <span className="text-neutral-600 text-sm">{cred.text}</span>
                </li>
              ))}
            </ul>

            <a href="#contacto" className="btn-primary">
              <FaCalendarCheck />
              Agendar con la Dra. González
            </a>
          </div>
        </div>

        {/* Values / Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {VALUES.map((v, i) => (
            <div
              key={i}
              className={`text-center bg-white rounded-2xl border border-neutral-100 p-6 hover:shadow-lg hover:border-primary-200 transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${200 + i * 60}ms` }}
            >
              <p className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">
                {v.number}
              </p>
              <p className="font-semibold text-neutral-800 mb-1 text-sm">
                {v.label}
              </p>
              <p className="text-neutral-400 text-xs">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
