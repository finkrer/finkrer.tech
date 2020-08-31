const palette = require('tailwindcss/lib/flagged/uniformColorPalette')
const colors = palette.default.theme.colors

const accent = colors.yellow

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './layout/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        accent: accent,
      },
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
      boxShadow: { focus: '0 0 0 2px ' + accent[200] },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: 'all',
}
