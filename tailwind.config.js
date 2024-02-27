/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        abel: ["Abel", "sans-serif"],
      },
      colors: {
        primary: "#0B60B0",
        secondary: "#40A2D8",
        accent: "#000000",
        background: "#F1F3FA",
      },
      height: {
        120: "30rem",
        130: "50rem",
        140: "60rem",
      },
    },
  },
  plugins: [],
};
