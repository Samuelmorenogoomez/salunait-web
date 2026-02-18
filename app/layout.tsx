import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saluna IT — Soluciones tecnológicas para empresas",
  description:
    "Consultoría IT, desarrollo web, automatización e infraestructura. Saluna IT, tu partner tecnológico.",
  openGraph: {
    title: "Saluna IT",
    description:
      "Consultoría IT, desarrollo web, automatización e infraestructura para empresas.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // si no tienes favicon.ico, no pasa nada
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="min-h-screen text-slate-100">{children}</body>
    </html>
  );
}
