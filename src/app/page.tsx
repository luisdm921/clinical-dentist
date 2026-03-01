import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* 1. Hero — Captura atención e invita a agendar */}
      <Hero />

      {/* 2. Servicios — Muestra qué ofreces con precios */}
      <Services />

      {/* 3. Testimonios — Prueba social para generar confianza */}
      <Testimonials />

      {/* 4. Equipo — Credibilidad de la doctora / equipo */}
      <Team />

      {/* 5. Contacto — Formulario + mapa + teléfonos */}
      <Contact />
    </>
  );
}
