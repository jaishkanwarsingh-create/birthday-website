/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 45px rgba(246, 175, 135, 0.18)',
      },
      colors: {
        blush: '#f8d9d9',
        peach: '#ffd7c2',
        cream: '#fffaf5',
        lavender: '#ecdefd',
        rose: '#ff758f',
        roseDeep: '#dd5d73',
        gold: '#d7b56d',
      },
      fontFamily: {
        script: ['\"Parisienne\"', 'cursive'],
        serif: ['\"Cormorant Garamond\"', 'serif'],
        sans: ['\"Manrope\"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
