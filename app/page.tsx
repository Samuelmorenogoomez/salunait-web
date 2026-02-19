"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/34681885979";
const EMAIL_CONTACTO = "contacto@salunait.es";
const EMAIL_SOPORTE = "soporte@salunait.es";

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-7 sm:p-8 hover:border-blue-500/40 transition">
      <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-slate-300 text-sm sm:text-base">{desc}</p>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Bloquea scroll del body cuando el menú móvil está abierto
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 96; // header móvil/desktop (aprox)
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const go = (id: string) => {
    setMenuOpen(false);
    // pequeño delay para que cierre el drawer antes del scroll
    setTimeout(() => scrollToSection(id), 60);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="relative h-10 sm:h-14 w-[150px] sm:w-[200px]">
            <Image
              src="/logo.png"
              alt="Saluna IT"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button
              onClick={() => scrollToSection("servicios")}
              className="hover:text-blue-400 transition"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("proceso")}
              className="hover:text-blue-400 transition"
            >
              Cómo trabajamos
            </button>
            <button
              onClick={() => scrollToSection("tecnologia")}
              className="hover:text-blue-400 transition"
            >
              Tecnología
            </button>
            <button
              onClick={() => scrollToSection("enfoque")}
              className="hover:text-blue-400 transition"
            >
              Enfoque
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="hover:text-blue-400 transition"
            >
              Contacto
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 px-5 py-2 rounded-xl font-semibold hover:bg-blue-600 transition"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile actions */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 transition"
            >
              WhatsApp
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition"
            >
              <span className="block w-5 h-[2px] bg-white/80" />
              <span className="block w-5 h-[2px] bg-white/80 mt-1" />
              <span className="block w-5 h-[2px] bg-white/80 mt-1" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60]">
          {/* backdrop */}
          <button
            aria-label="Cerrar menú"
            className="absolute inset-0 bg-black/70"
            onClick={() => setMenuOpen(false)}
          />
          {/* panel */}
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm border-l border-white/10 bg-black/95 backdrop-blur p-5">
            <div className="flex items-center justify-between">
              <div className="relative h-10 w-[150px]">
                <Image
                  src="/logo.png"
                  alt="Saluna IT"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition text-sm"
              >
                Cerrar
              </button>
            </div>

            <div className="mt-8 space-y-2">
              <button
                onClick={() => go("servicios")}
                className="w-full text-left rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
              >
                Servicios
              </button>
              <button
                onClick={() => go("proceso")}
                className="w-full text-left rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
              >
                Cómo trabajamos
              </button>
              <button
                onClick={() => go("tecnologia")}
                className="w-full text-left rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
              >
                Tecnología
              </button>
              <button
                onClick={() => go("enfoque")}
                className="w-full text-left rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
              >
                Enfoque
              </button>
              <button
                onClick={() => go("contacto")}
                className="w-full text-left rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
              >
                Contacto
              </button>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-slate-300">Contacto rápido</div>
              <div className="mt-2 text-xs text-slate-400">
                contacto@salunait.es · +34 681 885 979
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-blue-500 px-4 py-3 font-semibold hover:bg-blue-600 transition"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MAIN */}
      <main className="relative overflow-hidden pt-24 sm:pt-28">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 h-[680px] w-[680px] rounded-full bg-blue-600/25 blur-[150px]" />
          <div className="absolute bottom-[-250px] right-[-250px] h-[560px] w-[560px] rounded-full bg-cyan-500/15 blur-[150px]" />
        </div>

        {/* HERO */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-28">
          <p className="text-xs sm:text-sm text-blue-400 font-medium uppercase tracking-wide">
            Consultoría tecnológica avanzada
          </p>

          <h1 className="mt-4 sm:mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Infraestructura tecnológica diseñada para crecer contigo
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-3xl">
            Diseñamos sistemas robustos, automatizados y alineados con los objetivos
            estratégicos de tu empresa.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition text-center"
            >
              Hablar por WhatsApp
            </a>
            <button
              onClick={() => scrollToSection("contacto")}
              className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white/5 transition text-center"
            >
              Solicitar propuesta
            </button>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section className="py-16 sm:py-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-10 sm:gap-12 text-slate-300">
            <div>
              <h3 className="text-white text-lg sm:text-xl font-semibold">Arquitectura empresarial</h3>
              <p className="mt-3 text-sm sm:text-base">
                Diseño técnico enfocado en rendimiento, seguridad y mantenimiento a largo plazo.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg sm:text-xl font-semibold">Automatización real</h3>
              <p className="mt-3 text-sm sm:text-base">
                Reducción de tareas manuales mediante integraciones y procesos inteligentes.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg sm:text-xl font-semibold">Visión estratégica</h3>
              <p className="mt-3 text-sm sm:text-base">
                Tecnología alineada con objetivos empresariales y crecimiento estructurado.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="pt-20 sm:pt-28 pb-16 sm:pb-28 border-t border-white/10"
>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">Servicios</h2>

            <div className="mt-8 sm:mt-12 grid md:grid-cols-2 gap-4 sm:gap-8">
              <Card title="Consultoría IT" desc="Diagnóstico, estrategia y optimización tecnológica." />
              <Card title="Desarrollo Web" desc="Aplicaciones modernas y escalables." />
              <Card title="Automatización & Integraciones" desc="Optimización de procesos empresariales." />
              <Card title="Infraestructura & Soporte" desc="Mantenimiento y continuidad operativa." />
            </div>
          </div>
        </section>

        {/* CÓMO TRABAJAMOS */}
        <section id="proceso" className="pt-20 sm:pt-28 pb-16 sm:pb-28 border-t border-white/10"
>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">Cómo trabajamos</h2>

            <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 text-slate-300">
              {[
                { n: "01", t: "Análisis", d: "Comprendemos el problema y los objetivos." },
                { n: "02", t: "Diseño", d: "Arquitectura orientada a rendimiento y escalabilidad." },
                { n: "03", t: "Implementación", d: "Desarrollo limpio y controlado." },
                { n: "04", t: "Evolución", d: "Mejora continua y soporte estratégico." },
              ].map((x) => (
                <div key={x.n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-blue-400 font-semibold text-lg">{x.n}</div>
                  <h3 className="mt-3 text-white font-semibold">{x.t}</h3>
                  <p className="mt-2 text-sm">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECNOLOGÍA */}
        <section id="tecnologia" className="pt-20 sm:pt-28 pb-16 sm:pb-28 border-t border-white/10"
>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">Arquitectura & Stack</h2>

            <div className="mt-8 sm:mt-12 grid md:grid-cols-2 gap-4 sm:gap-10">
              <Card title="Backend & APIs" desc=".NET y Python con arquitectura limpia." />
              <Card title="Bases de datos" desc="PostgreSQL y SQL Server optimizados." />
              <Card title="Automatización" desc="Integración de sistemas y procesos." />
              <Card title="DevOps & Infraestructura" desc="CI/CD, entornos separados y seguridad." />
            </div>
          </div>
        </section>

        {/* ENFOQUE */}
        <section id="enfoque" className="pt-20 sm:pt-28 pb-16 sm:pb-28 border-t border-white/10"
>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-4 sm:mt-0">
              Enfoque técnico con mentalidad empresarial
            </h2>

            <p className="mt-5 sm:mt-6 text-slate-300 max-w-3xl mx-auto text-sm sm:text-base">
              Trabajamos con estándares profesionales: control de versiones, separación de entornos,
              documentación y diseño mantenible. No desarrollamos soluciones temporales. Diseñamos
              sistemas preparados para crecer.
            </p>

            <div className="mt-10 sm:mt-14 grid sm:grid-cols-3 gap-6 sm:gap-12 text-slate-300">
              {[
                { k: "100%", v: "Enfoque en calidad técnica" },
                { k: "∞", v: "Escalabilidad como principio" },
                { k: "0", v: "Dependencias innecesarias" },
              ].map((x) => (
                <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-3xl sm:text-4xl font-semibold text-blue-400">{x.k}</div>
                  <p className="mt-2 text-sm">{x.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="py-20 sm:py-32 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold">¿Hablamos?</h2>

            <p className="mt-4 sm:mt-6 text-slate-300 text-sm sm:text-base">
              Ponte en contacto y te enviaremos una propuesta adaptada.
            </p>

            <div className="mt-8 sm:mt-10 space-y-3 text-slate-300 text-sm sm:text-base">
              <div>
                Email:{" "}
                <a href={`mailto:${EMAIL_CONTACTO}`} className="text-blue-400 hover:underline">
                  {EMAIL_CONTACTO}
                </a>
              </div>
              <div>
                Soporte:{" "}
                <a href={`mailto:${EMAIL_SOPORTE}`} className="text-blue-400 hover:underline">
                  {EMAIL_SOPORTE}
                </a>
              </div>
              <div>Tel: +34 681 885 979</div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-10 sm:mt-12 inline-block bg-blue-500 hover:bg-blue-600 transition px-8 sm:px-10 py-4 rounded-2xl font-semibold"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </section>

        <footer className="border-t border-white/10 py-10 text-center text-slate-400 text-xs sm:text-sm">
          © {new Date().getFullYear()} Saluna IT · All rights reserved
        </footer>
      </main>
    </>
  );
}
