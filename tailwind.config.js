/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#d9d9d9',
        'darkpurp':'#352F44',
        'lightpurp':'#5C5470',
        'extralight':'#B9B4C7'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },  
  },
  plugins: [],
}