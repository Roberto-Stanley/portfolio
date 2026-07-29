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
        background: "var(--color-background)",
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        "primary-active": "var(--color-primary-active)",
        secondary: "var(--color-secondary)",
        "secondary-alt": "var(--color-secondary-alt)",
        "secondary-hover": "var(--color-secondary-hover)",
        "secondary-active": "var(--color-secondary-active)",
        "secondary-light": "var(--color-secondary-light)",
        decorative: "var(--color-decorative)",
        "background-decorative": "var(--color-background-decorative)",
        content: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
        },
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        second: ["Fira Code", "monospace"],
        alternative: ["Inter", "sans-serif"],
      },
      borderWidth: {
        "3": "3px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "calc(13ch + 4px)" },
        },
        "blink-cursor-three": {
          "0%": { borderRightColor: "#ffffff" },
          "16.667%": { borderRightColor: "transparent" },
          "33.333%": { borderRightColor: "#ffffff" },
          "50%": { borderRightColor: "transparent" },
          "66.667%": { borderRightColor: "#ffffff" },
          "83.333%, 100%": { borderRightColor: "transparent" },
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
        "typing-loop":
          "typing 3.5s steps(13, end) forwards, blink-cursor-three 1.8s step-end 3.5s 1 forwards",
        marquee: "marquee 60s linear infinite",
        "orbital-spin": "orbital-spin 60s linear infinite",
        "orbital-counter-spin": "orbital-counter-spin 20s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
