import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        success: "#16A34A",
        warning: "#FACC15",
        danger: "#DC2626",
        info: "#38BDF8",
        background: "#F8FAFC",
        text: "#0F172A",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
