// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const isProd = process.env.NODE_ENV === 'production'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const runtimeCaching = require('next-pwa/cache')

module.exports = {
  reactStrictMode: true
}

module.exports = withPWA({
  pwa: {
    runtimeCaching,
    dest: 'public',
    disable: !isProd,
    buildExcludes: [/middleware-manifest\.json$/]
  }
})
