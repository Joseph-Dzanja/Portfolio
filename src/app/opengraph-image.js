import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social preview card shown when the site is shared on LinkedIn, WhatsApp, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#161616",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, display: "flex" }}>
          Dzanja<span style={{ color: "#20b26c" }}>.</span>
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 40 }}>{profile.name}</div>
        <div style={{ fontSize: 44, color: "#20b26c", marginTop: 12 }}>{`Full-Stack ${profile.role}`}</div>
        <div style={{ fontSize: 30, color: "#9ca3af", marginTop: 32 }}>
          {`Next.js · FastAPI · C# · PostgreSQL · ${profile.location}`}
        </div>
      </div>
    ),
    size
  );
}
