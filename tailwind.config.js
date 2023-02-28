/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './component/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        darkblue: '#152C5B',
        lightblue: '#3252DF',
        pink: '#FF498B',
        yellow: '#FFCC47',
        lightgray: '#B0B0B0'
      },
    },
  },
  plugins: [],
};
