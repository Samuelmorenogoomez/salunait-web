"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "saluna_cookie_consent_v2";

type Consent = "accepted" | "rejected";

function readConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

function writeConsent(v: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, v);
  } catch {}
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const force = params.get("cookies") === "1";

    if (force) {
      try {
        localStorage.removeItem(CONSENT_KEY);
      } catch {}
      setVisible(true);
      return;
    }

    const consent = readConsent();
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    writeConsent("accepted");
    setVisible(false);

    // Si usas GA/gtag con Consent Mode:
    if ((window as any).gtag) {
      (window as any).gtag("consent", "update", { analytics_storage: "granted" });
    }
  };

  const reject = () => {
    writeConsent("rejected");
    setVisible(false);

    if ((window as any).gtag) {
      (window as any).gtag("consent", "update", { analytics_storage: "denied" });
    }
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        zIndex: 999999,
        background: "black",
        color: "white",
        padding: 16,
        borderTop: "1px solid #444",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          gap: 12,
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontSize: 14, color: "#ccc", lineHeight: 1.4 }}>
         Utilizamos cookies para garantizar el correcto funcionamiento y mejorar nuestros servicios.{" "}
          <a href="/politica-cookies" style={{ color: "white", textDecoration: "underline" }}>
            Ver política de cookies
          </a>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={reject}
            style={{
              padding: "8px 12px",
              background: "transparent",
              color: "white",
              border: "1px solid #666",
              borderRadius: 8,
            }}
          >
            Rechazar
          </button>

          <button
            onClick={accept}
            style={{
              padding: "8px 12px",
              background: "white",
              color: "black",
              border: "1px solid white",
              borderRadius: 8,
              fontWeight: 600,
            }}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
