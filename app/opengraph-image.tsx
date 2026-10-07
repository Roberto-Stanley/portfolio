import { ImageResponse } from "next/og";

export const alt = "Roberto Reyes | Senior Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TECH_STACK = ["React", "Next.js", "Node.js", "GraphQL", "TypeScript"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#020317",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent line */}
        <div
          style={{
            width: 64,
            height: 4,
            background: "#4b7bff",
            borderRadius: 2,
            marginBottom: 32,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#f1f1f1",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Roberto Reyes
        </div>

        {/* Job title */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: "#999999",
            marginBottom: 48,
          }}
        >
          Senior Full-Stack Developer
        </div>

        {/* Tech stack chips */}
        <div style={{ display: "flex", gap: 12, marginBottom: 64 }}>
          {TECH_STACK.map((tech) => (
            <div
              key={tech}
              style={{
                background: "#4b7bff22",
                border: "1px solid #4b7bff55",
                borderRadius: 24,
                padding: "8px 20px",
                fontSize: 20,
                color: "#4b7bff",
                fontWeight: 500,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 80,
            fontSize: 24,
            color: "#999999",
          }}
        >
          robertoreyes.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
