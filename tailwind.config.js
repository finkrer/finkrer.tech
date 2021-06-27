const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['**/*.tsx'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'serif': ['serif'],
      'mono': ['Iosevka Web', 'monospace'],
      'display': ['Iosevka Web', 'sans-serif'],
    },
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
  variants: {
    extend: {
      ringOpacity: ['dark'],
    },
  },
  plugins: [],
}
