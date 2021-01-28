const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      },
      maxWidth: {
        optimal: '60ch',
      },
    },
  },
  variants: {},
  plugins: [],
}
