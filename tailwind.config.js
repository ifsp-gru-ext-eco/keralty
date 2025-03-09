/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0072CE',
        second: '#003087',
        third: '#00B388',
        fourth: '#00755a',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}