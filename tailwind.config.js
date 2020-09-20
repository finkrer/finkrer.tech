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
      boxShadow: { focus: '0 0 0 2px ' + colors.gray[200] },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: 'all',
}
