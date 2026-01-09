import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D32F2F",
        "primary-hover": "#B71C1C",
        "background-light": "#FFFFFF",
        "background-dark": "#121212",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1E1E1E",
        ink: "#1F2937",
      },
      fontFamily: {
        heading: ["Poppins", "Manrope", "system-ui", "sans-serif"],
        body: ["Manrope", "Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -24px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [forms],
};

export default config;
