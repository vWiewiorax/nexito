import { ImageResponse } from "next/og";

export const alt = "NEXIWEB - Technologia dla Twojego biznesu";
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
          background: "radial-gradient(circle at 50% -20%, rgba(40,110,245,0.45), #0b0b10 60%)",
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
              background: "linear-gradient(135deg, #5aa2ff, #1f5fe0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="56" height="56" viewBox="0 0 32 32">
              <path d="M9.5 22.5V9.5l13 13V9.5" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9.5" cy="22.5" r="2.6" fill="white" />
              <circle cx="9.5" cy="9.5" r="2.6" fill="white" />
              <circle cx="22.5" cy="22.5" r="2.6" fill="white" />
              <circle cx="22.5" cy="9.5" r="2.6" fill="white" />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, letterSpacing: 4 }}>
            NEXI<span style={{ color: "#5aa2ff" }}>WEB</span>
          </div>
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
