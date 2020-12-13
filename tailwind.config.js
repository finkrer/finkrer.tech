const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['**/*.tsx'],
  darkMode: 'class',
  theme: {
    // dynamic metrics taken from https://rsms.me/inter/dynmetrics
    fontSize: {
      xs: ['14px', { letterSpacing: '-0.006em', lineHeight: '23px' }],
      sm: ['16px', { letterSpacing: '-0.011em', lineHeight: '27px' }],
      base: ['18px', { letterSpacing: '-0.014em', lineHeight: '30px' }],
      lg: ['20px', { letterSpacing: '-0.017em', lineHeight: '33px' }],
      xl: ['24px', { letterSpacing: '-0.019em', lineHeight: '35px' }],
      '2xl': ['28px', { letterSpacing: '-0.020em', lineHeight: '37px' }],
      '3xl': ['32px', { letterSpacing: '-0.021em', lineHeight: '40px' }],
      '4xl': ['36px', { letterSpacing: '-0.021em', lineHeight: '42px' }],
      '5xl': ['40px', { letterSpacing: '-0.022em', lineHeight: '45px' }],
      '6xl': ['60px', { letterSpacing: '-0.022em', lineHeight: '55px' }],
      '7xl': ['80px', { letterSpacing: '-0.022em', lineHeight: '70px' }],
      '8xl': ['120px', { letterSpacing: '-0.022em', lineHeight: '100px' }],
      '9xl': ['160px', { letterSpacing: '-0.022em', lineHeight: '135px' }],
    },
    extend: {
      colors: {
        gray: colors.gray,
      },
      maxWidth: {
        optimal: '60ch',
      },
    },
  },
  variants: {},
  plugins: [],
}
