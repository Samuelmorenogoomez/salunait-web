import Link from "next/link";

export default function LegalTopBar() {
  return (
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
          fontWeight: 700,
        }}
      >
        ← Volver a la web
      </Link>


    </div>
  );
}
