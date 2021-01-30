const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        orange: colors.orange,
        lightblue: colors.lightBlue,
        rose: colors.rose,
      },
      maxWidth: {
        optimal: '60ch',
      },
    },
  },
  variants: {},
  plugins: [],
}
