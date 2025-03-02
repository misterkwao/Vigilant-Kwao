/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media", // or 'class' for manual dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          light: "#4F46E5",
          DEFAULT: "#4338CA",
          dark: "#3730A3",
        },
        secondary: {
          light: "#FBBF24",
          DEFAULT: "#F59E0B",
          dark: "#D97706",
        },
        background: {
          light: "#F8FAFC",
          DEFAULT: "#FFFFFF",
          dark: "#1F2937",
        },
        text: {
          light: "#1F2937",
          DEFAULT: "#374151",
          dark: "#F8FAFC",
        },
      },
      fontFamily: {
        doto: ["Doto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
