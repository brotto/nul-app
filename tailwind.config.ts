import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0E",
        surface: "#14141A",
        text: "#F5F5F7",
        muted: "#A1A1AA",
        gold: "#D4AF37"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(212,175,55,0.2), 0 0 30px rgba(212,175,55,0.15)"
      },
      backgroundImage: {
        "gold-grid":
          "linear-gradient(rgba(212,175,55,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
