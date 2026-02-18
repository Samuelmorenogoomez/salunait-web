"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/34681885979";
const EMAIL_CONTACTO = "contacto@salunait.es";
const EMAIL_SOPORTE = "soporte@salunait.es";

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-blue-500/40 transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-slate-300">{desc}</p>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 110;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
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
        <div className="mx-auto max-w-6xl flex justify-between items-center px-6 py-4">
          <div className="relative h-14 w-[200px]">
            <Image
              src="/logo.png"
              alt="Saluna IT"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="flex items-center gap-8 text-sm">
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
          </div>
        </div>
      </header>

      <main className="relative overflow-hidden pt-28">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-blue-600/25 blur-[150px]" />
          <div className="absolute bottom-[-250px] right-[-250px] h-[600px] w-[600px] rounded-full bg-cyan-500/15 blur-[150px]" />
        </div>

        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 pb-28">
          <p className="text-sm text-blue-400 font-medium uppercase tracking-wide">
            Consultoría tecnológica avanzada
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Infraestructura tecnológica diseñada para crecer contigo
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl">
            Diseñamos sistemas robustos, automatizados y alineados con los
            objetivos estratégicos de tu empresa.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section className="py-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-slate-300">
            <div>
              <h3 className="text-white text-xl font-semibold">
                Arquitectura empresarial
              </h3>
              <p className="mt-3">
                Diseño técnico enfocado en rendimiento, seguridad y mantenimiento
                a largo plazo.
              </p>
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold">
                Automatización real
              </h3>
              <p className="mt-3">
                Reducción de tareas manuales mediante integraciones y procesos
                inteligentes.
              </p>
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold">
                Visión estratégica
              </h3>
              <p className="mt-3">
                Tecnología alineada con objetivos empresariales y crecimiento
                estructurado.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="py-28 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold">Servicios</h2>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Card
                title="Consultoría IT"
                desc="Diagnóstico, estrategia y optimización tecnológica."
              />
              <Card
                title="Desarrollo Web"
                desc="Aplicaciones modernas y escalables."
              />
              <Card
                title="Automatización & Integraciones"
                desc="Optimización de procesos empresariales."
              />
              <Card
                title="Infraestructura & Soporte"
                desc="Mantenimiento y continuidad operativa."
              />
            </div>
          </div>
        </section>

        {/* CÓMO TRABAJAMOS */}
        <section id="proceso" className="py-28 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold">Cómo trabajamos</h2>

            <div className="mt-16 grid md:grid-cols-4 gap-10 text-slate-300">
              <div>
                <div className="text-blue-400 font-semibold text-lg">01</div>
                <h3 className="mt-3 text-white font-semibold">Análisis</h3>
                <p className="mt-2 text-sm">
                  Comprendemos el problema y los objetivos.
                </p>
              </div>

              <div>
                <div className="text-blue-400 font-semibold text-lg">02</div>
                <h3 className="mt-3 text-white font-semibold">Diseño</h3>
                <p className="mt-2 text-sm">
                  Arquitectura orientada a rendimiento y escalabilidad.
                </p>
              </div>

              <div>
                <div className="text-blue-400 font-semibold text-lg">03</div>
                <h3 className="mt-3 text-white font-semibold">Implementación</h3>
                <p className="mt-2 text-sm">Desarrollo limpio y controlado.</p>
              </div>

              <div>
                <div className="text-blue-400 font-semibold text-lg">04</div>
                <h3 className="mt-3 text-white font-semibold">Evolución</h3>
                <p className="mt-2 text-sm">
                  Mejora continua y soporte estratégico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TECNOLOGÍA */}
        <section id="tecnologia" className="py-28 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold">Arquitectura & Stack</h2>

            <div className="mt-12 grid md:grid-cols-2 gap-10">
              <Card
                title="Backend & APIs"
                desc=".NET y Python con arquitectura limpia."
              />
              <Card
                title="Bases de datos"
                desc="PostgreSQL y SQL Server optimizados."
              />
              <Card
                title="Automatización"
                desc="Integración de sistemas y procesos."
              />
              <Card
                title="DevOps & Infraestructura"
                desc="CI/CD, entornos separados y seguridad."
              />
            </div>
          </div>
        </section>

        {/* ENFOQUE TÉCNICO */}
        <section id="enfoque" className="py-28 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold">
              Enfoque técnico con mentalidad empresarial
            </h2>

            <p className="mt-6 text-slate-300 max-w-3xl mx-auto">
              Trabajamos con estándares profesionales: control de versiones,
              separación de entornos, documentación y diseño mantenible. No
              desarrollamos soluciones temporales. Diseñamos sistemas preparados
              para crecer.
            </p>

            <div className="mt-14 grid md:grid-cols-3 gap-12 text-slate-300">
              <div>
                <div className="text-4xl font-semibold text-blue-400">100%</div>
                <p className="mt-2 text-sm">Enfoque en calidad técnica</p>
              </div>

              <div>
                <div className="text-4xl font-semibold text-blue-400">∞</div>
                <p className="mt-2 text-sm">Escalabilidad como principio</p>
              </div>

              <div>
                <div className="text-4xl font-semibold text-blue-400">0</div>
                <p className="mt-2 text-sm">Dependencias innecesarias</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="py-32 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-semibold">¿Hablamos?</h2>

            <p className="mt-6 text-slate-300">
              Ponte en contacto y te enviaremos una propuesta adaptada.
            </p>

            <div className="mt-10 space-y-3 text-slate-300">
              <div>
                Email:{" "}
                <a
                  href={`mailto:${EMAIL_CONTACTO}`}
                  className="text-blue-400 hover:underline"
                >
                  {EMAIL_CONTACTO}
                </a>
              </div>
              <div>
                Soporte:{" "}
                <a
                  href={`mailto:${EMAIL_SOPORTE}`}
                  className="text-blue-400 hover:underline"
                >
                  {EMAIL_SOPORTE}
                </a>
              </div>
              <div>Tel: +34 681 885 979</div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-12 inline-block bg-blue-500 hover:bg-blue-600 transition px-10 py-4 rounded-2xl font-semibold"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </section>

        <footer className="border-t border-white/10 py-10 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Saluna IT · All rights reserved
        </footer>
      </main>
    </>
  );
}
