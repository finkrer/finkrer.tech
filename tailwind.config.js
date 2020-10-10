const palette = require('tailwindcss/lib/flagged/uniformColorPalette')
const colors = palette.default.theme.colors

const accent = colors.yellow

module.exports = {
  purge: ['**/*.tsx'],
  theme: {
    extend: {
      colors: {
        accent: accent,
      },
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
