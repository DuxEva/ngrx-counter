/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#313E51",
        purple: "#A729F5",
        yellow: "#F8CD65",
        darkRed: "#8B0000",
        green: "#3C8066",
      },
    },
  },
  plugins: [],
};
