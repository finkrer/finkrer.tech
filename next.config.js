const withPreact = require('next-plugin-preact')

module.exports = withPreact({
  compress: process.env.NODE_ENV === 'development',
  poweredByHeader: false,
  reactStrictMode: true,
})
