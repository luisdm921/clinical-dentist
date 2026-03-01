"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaTooth,
} from "react-icons/fa";

/* ══════════════════════════════════════════════════════════
   PERSONALIZAR: Redes sociales y enlaces legales
   ══════════════════════════════════════════════════════════ */
const SOCIALS = [
  /* PERSONALIZAR: URLs de redes sociales */
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

const SERVICES_LIST = [
  "Limpieza Dental",
  "Blanqueamiento",
  "Ortodoncia Invisible",
  "Implantes Dentales",
  "Endodoncia",
  "Odontopediatría",
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-neutral-950 text-white relative">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <FaTooth className="text-white text-sm" />
              </div>
              <div>
                {/* PERSONALIZAR: Nombre del consultorio */}
                <p className="font-bold text-lg leading-tight">DentalCare</p>
                <p className="text-[9px] text-primary-300 tracking-widest uppercase">
                  Clínica Dental
                </p>
              </div>
            </div>
            {/* PERSONALIZAR: Descripción del consultorio */}
            <p className="text-neutral-400 text-sm leading-relaxed mb-5">
              Transformamos sonrisas con tecnología de punta, tratamientos sin
              dolor y un equipo que realmente se preocupa por ti.
            </p>
            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-neutral-400 hover:text-primary-400 hover:border-primary-500/40 hover:bg-primary-500/10 transition-all"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Servicios", href: "#servicios" },
                { label: "Sobre Nosotros", href: "#nosotros" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-5">
              Servicios
            </h4>
            <ul className="space-y-3">
              {SERVICES_LIST.map((s) => (
                <li key={s} className="text-neutral-400 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-5">
              Contacto
            </h4>
            <ul className="space-y-4">
              {/* PERSONALIZAR: Dirección */}
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary-400 mt-0.5 flex-shrink-0 text-sm" />
                <span className="text-neutral-400 text-sm">
                  Av. Reforma 222, Piso 5
                  <br />
                  Col. Juárez, 06600 — CDMX
                </span>
              </li>
              {/* PERSONALIZAR: Teléfono */}
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary-400 text-sm flex-shrink-0" />
                <a
                  href="tel:+525512345678"
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  (55) 1234-5678
                </a>
              </li>
              {/* PERSONALIZAR: Email */}
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary-400 text-sm flex-shrink-0" />
                <a
                  href="mailto:citas@dentalcare.com"
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  citas@dentalcare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {year} DentalCare. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            {/* PERSONALIZAR: Enlaces legales */}
            <a
              href="#"
              className="text-neutral-500 hover:text-primary-400 transition-colors text-sm"
            >
              Aviso de Privacidad
            </a>
            <a
              href="#"
              className="text-neutral-500 hover:text-primary-400 transition-colors text-sm"
            >
              Términos y Condiciones
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-neutral-400 hover:text-primary-400 hover:border-primary-500/40 transition-all"
              aria-label="Volver arriba"
            >
              <FaArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
