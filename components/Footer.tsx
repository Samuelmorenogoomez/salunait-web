import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 80,
        padding: "30px 20px",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        fontSize: 14,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <Link href="/aviso-legal" style={{ textDecoration: "underline" }}>
            Aviso Legal
          </Link>

          <Link href="/politica-privacidad" style={{ textDecoration: "underline" }}>
            Política de Privacidad
          </Link>

          <Link href="/politica-cookies" style={{ textDecoration: "underline" }}>
            Política de Cookies
          </Link>
        </div>

        <div style={{ opacity: 0.6 }}>
          © {new Date().getFullYear()} Saluna Consulting. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
