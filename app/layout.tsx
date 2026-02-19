import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "../components/CookieBanner";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Saluna Consulting | Soluciones Empresariales Tecnológicas",
  description:
    "Saluna Consulting ofrece soluciones empresariales tecnológicas: integración de sistemas, automatización de procesos y desarrollo estratégico.",
  metadataBase: new URL("https://saluna.es"),
  openGraph: {
    title: "Saluna Consulting | Soluciones Empresariales Tecnológicas",
    description:
      "Consultoría tecnológica especializada en soluciones empresariales.",
    url: "https://saluna.es",
    siteName: "Saluna Consulting",
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
