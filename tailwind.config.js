module.exports = {
  purge:
    process.env.NODE_ENV === 'production'
      ? ['./pages/**/*.js', './components/**/*.js']
      : [],
  theme: {
    extend: {
      screens: {
        light: { raw: '(prefers-color-scheme: light)' },
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
