/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#8EBEED",
          dark: "#2C3E50",
          steel: "#5D8AA8",
          gray: "#f4f7f993",
          white: "#FFFFFF",
        }
      }
    },
  },
  plugins: [],
}
