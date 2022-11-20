/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  // mode: 'jit',
  // darkMode: 'class', // or 'media' or 'class'
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // extend: {
    //   colors: {
    //     trueGray: colors.neutral,
    //   },
    // },
    // fontFamily: {
    //   sans: ['Inter', ...defaultTheme.fontFamily.sans],
    //   stock: [defaultTheme.fontFamily.sans],
    // },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
