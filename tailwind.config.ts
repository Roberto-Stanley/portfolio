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
      },
      fontFamily: {
        fireCode: ["Fira Code", "monospace"],
        rougeScript: ["Rouge Script", "cursive"],
      },

      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        hideCursor: {
          "0%": { borderColor: "white" },
          "100%": { borderColor: "transparent" },
        },
      },
      animation: {
        typing:
          "typing 3.5s steps(45, end) forwards, hideCursor 0.5s forwards 4s",
        blink: "blink 0.2s step-end infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
