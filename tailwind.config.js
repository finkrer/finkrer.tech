const palette = require('tailwindcss/lib/flagged/uniformColorPalette')
const colors = palette.default.theme.colors

module.exports = {
  purge: ['**/*.tsx'],
  theme: {
    extend: {
      colors: {
        fg: 'var(--fg)',
        bg: 'var(--bg)',
        accent: 'var(--accent)',
        strong_accent: 'var(--strong_accent)',
        hover: 'var(--hover)',
        faded: 'var(--faded)',
        navbar: 'var(--navbar)',
        navbar_hover: 'var(--navbar_hover)',
        button: 'var(--button)',
        button_fg: 'var(--button_fg)',
        button_hover: 'var(--button_hover)',
        selection: 'var(--selection)',
        positive: 'var(--positive)',
        negative: 'var(--negative)',
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
