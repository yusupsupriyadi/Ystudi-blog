const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'true-gray': colors.trueGray,
        'light-blue': colors.lightBlue,
        'lime': colors.lime,
        'emerald': colors.emerald,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
