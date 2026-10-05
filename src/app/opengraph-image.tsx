import { ImageResponse } from "next/og";

export const alt = "NEXITO - Technologia dla Twojego biznesu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(circle at 50% -20%, rgba(110,100,245,0.45), #0b0b10 60%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #8b8cf8, #6d3ee8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32">
              <path d="M6 26V6l20 20V6" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: 8 }}>NEXITO</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05, maxWidth: 900 }}>
            Technologia dla Twojego biznesu.
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.6)" }}>
            Aplikacje SaaS · Systemy dla firm · Strony i sklepy · Automatyzacje
          </div>
        </div>
      </div>
    ),
    size,
  );
}
