import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "../components/CookieBanner";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://salunait.es"),
  title: "Saluna Consulting | Soluciones Empresariales Tecnológicas",
  description:
    "Saluna Consulting ofrece soluciones empresariales tecnológicas: integración de sistemas, automatización de procesos y desarrollo estratégico.",

  alternates: {
    canonical: "https://salunait.es",
  },

  openGraph: {
    title: "Saluna IT Consulting | Soluciones Empresariales Tecnológicas",
    description:
      "Consultoría tecnológica especializada en soluciones empresariales.",
    url: "https://salunait.es",
    siteName: "Saluna IT Consulting",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Saluna IT Consulting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Saluna IT Consulting | Soluciones Empresariales Tecnológicas",
    description:
      "Consultoría tecnológica especializada en soluciones empresariales.",
    images: ["/og.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Saluna IT Consulting",
    url: "https://salunait.es",
    logo: "https://salunait.es/logo-512.png",
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
