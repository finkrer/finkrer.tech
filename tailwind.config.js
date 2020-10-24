const palette = require('tailwindcss/lib/flagged/uniformColorPalette')
const colors = palette.default.theme.colors

const accent = colors.green

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
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  experimental: 'all',
}
