/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A14A93', // Púrpura Orquídea
        secondary: '#E8A923', // Amarillo Dorado
        background: '#F7F7F7', // Gris Claro
        text: '#2D2D2D', // Gris Oscuro
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Montserrat', 'serif'],
      },
    },
  },
  plugins: [],
}
