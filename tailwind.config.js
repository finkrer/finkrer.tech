module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './layout/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: 'all',
}
