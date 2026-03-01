import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/* ══════════════════════════════════════════════════════════
   PERSONALIZAR: Metadatos SEO del consultorio
   ══════════════════════════════════════════════════════════ */
export const metadata: Metadata = {
  title: "DentalCare — Clínica Dental de Confianza en CDMX",
  description:
    "Sonríe con confianza. Blanqueamiento, implantes, ortodoncia invisible y más. Valoración gratuita. +15 años de experiencia. Agenda tu cita ahora.",
  keywords: [
    "dentista CDMX",
    "clínica dental",
    "blanqueamiento dental",
    "implantes dentales",
    "ortodoncia invisible",
    "limpieza dental",
    "dentista cerca de mí",
    "consulta dental gratis",
  ],
  openGraph: {
    title: "DentalCare — Tu Sonrisa Perfecta",
    description:
      "Agenda tu valoración gratuita. Tecnología de punta, tratamientos sin dolor y un equipo que cuida de ti.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
