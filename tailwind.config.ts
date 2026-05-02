import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        trini: {
          forest: "#1E4D3A",
          ivory: "#F7F3EA",
          violet: "#6E4A8E",
          orchid: "#D6A4C9",
          gold: "#C9A227",
          sage: "#B8C4B1",
          charcoal: "#2A2A2A",
          cream: "#FDFBF7",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        script: ["var(--font-great-vibes)", "cursive"],
      },
      animation: {
        "petal-float": "petalFloat 6s ease-in-out infinite",
        "petal-spin": "petalSpin 20s linear infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        petalFloat: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(5deg)" },
        },
        petalSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(110, 74, 142, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(110, 74, 142, 0.4)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
