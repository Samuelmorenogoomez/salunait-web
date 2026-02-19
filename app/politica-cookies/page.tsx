import Link from "next/link";

export const metadata = {
  title: "Política de Cookies | Saluna IT Consulting",
  description:
    "Política de cookies de Saluna IT Consulting conforme a la normativa española y europea (RGPD y LSSI).",
};

export default function PoliticaCookiesPage() {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "28px 20px 40px",
        lineHeight: 1.6,
      }}
    >
      {/* Barra superior de navegación */}
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginBottom: 24,
          paddingBottom: 16,
          borderBottom: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "underline",
            fontWeight: 600,
          }}
        >
          ← Volver a la web
        </Link>

       
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 24 }}>Política de Cookies</h1>

      <p>
        En Saluna IT Consulting utilizamos cookies con el objetivo de garantizar el
        correcto funcionamiento del sitio web, mejorar la experiencia del usuario
        y, en su caso, analizar el tráfico y el comportamiento de navegación.
      </p>

      <h2 style={{ marginTop: 32 }}>¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en el
        dispositivo del usuario cuando visita una página web. Permiten reconocer
        al usuario y facilitar la navegación, así como obtener información
        estadística sobre el uso del sitio.
      </p>

      <h2 style={{ marginTop: 32 }}>Tipos de cookies utilizadas</h2>

      <h3 style={{ marginTop: 20 }}>1. Cookies técnicas</h3>
      <p>
        Son necesarias para el funcionamiento del sitio web y no requieren el
        consentimiento del usuario. Permiten la navegación y el uso de las
        diferentes funcionalidades.
      </p>

      <h3 style={{ marginTop: 20 }}>2. Cookies analíticas (si se aceptan)</h3>
      <p>
        Permiten cuantificar el número de usuarios y realizar análisis estadísticos
        del uso del sitio web con el fin de mejorar los servicios ofrecidos.
        Estas cookies solo se activan cuando el usuario presta su consentimiento.
      </p>

      <h2 style={{ marginTop: 32 }}>Base legal</h2>
      <p>
        El uso de cookies analíticas se basa en el consentimiento del usuario,
        conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley 34/2002 de Servicios
        de la Sociedad de la Información y Comercio Electrónico (LSSI).
      </p>

      <h2 style={{ marginTop: 32 }}>Gestión y configuración</h2>
      <p>
        El usuario puede aceptar o rechazar el uso de cookies a través del banner
        de configuración mostrado al acceder al sitio web. Asimismo, puede
        configurar su navegador para bloquear o eliminar las cookies ya instaladas.
      </p>

      <h2 style={{ marginTop: 32 }}>Cómo desactivar las cookies en el navegador</h2>
      <p>
        Cada navegador permite gestionar las cookies desde su configuración (se
        recomienda consultar la sección de ayuda del navegador):
      </p>
      <ul>
        <li>Google Chrome</li>
        <li>Mozilla Firefox</li>
        <li>Microsoft Edge</li>
        <li>Safari</li>
      </ul>

      <h2 style={{ marginTop: 32 }}>Actualizaciones</h2>
      <p>
        Saluna IT Consulting podrá actualizar la presente Política de Cookies en
        función de exigencias legislativas o técnicas. Se recomienda revisar
        periódicamente este documento.
      </p>

      {/* CTA inferior para volver */}
      <div style={{ marginTop: 40 }}>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.25)",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Volver al inicio
        </Link>
      </div>

      <p style={{ marginTop: 24, fontSize: 14, opacity: 0.7 }}>
        Última actualización: {new Date().getFullYear()}
      </p>
    </main>
  );
}
