import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { primary: "#0B0E1A", card: "#151A2E" },
        accent: { DEFAULT: "#6C5CE7", glow: "#A29BFE" },
        success: "#00D68F",
        warning: "#FFB020",
        danger: "#FF5C5C",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: { xl: "12px", "2xl": "16px", "3xl": "24px" },
    },
  },
  plugins: [],
};
export default config;