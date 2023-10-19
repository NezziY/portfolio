/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Aquí puedes agregar configuraciones adicionales de temas si es necesario
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
