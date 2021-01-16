// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
      "src/**/*.html",
      "src/**/*.njk",
      "src/**/*.md"
    ],
    options: {
      whitelist: [],
    },
  },
  variants: {},
  plugins: [
  ],
};