import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundAlt: "var(--background-alt)",
        primary: "var(--primary)",
        "primary-alt": "var(--primary-alt)",
        secondary: "var(--secondary)",
        "magic-mint": "#a3ffdc",
        cards: "#21213c",
        decorative: "#151856",
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        second: ["Fira Code", "monospace"],
        fireCode: ["Fira Code", "monospace"],
        alternative: ["Rouge Script", "cursive"],
        rougeScript: ["Rouge Script", "cursive"],
      },
      borderWidth: {
        "3": "3px",
      },

      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "calc(13ch + 4px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        hideCursor: {
          "0%": { borderRightColor: "white" },
          "100%": { borderRightColor: "transparent" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "orbital-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "orbital-counter-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        typing:
          "typing 3.5s steps(13, end) forwards, hideCursor 0.4s linear 3.5s forwards",
        blink: "blink 0.2s step-end infinite",
        marquee: "marquee 30s linear infinite",
        "orbital-spin": "orbital-spin 60s linear infinite",
        "orbital-counter-spin": "orbital-counter-spin 20s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
