module.exports = {
  purge:
    process.env.NODE_ENV === 'production'
      ? ['./pages/**/*.tsx', './components/**/*.tsx']
      : [],
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
