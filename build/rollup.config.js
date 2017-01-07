const buble = require('rollup-plugin-buble')
const replace = require('rollup-plugin-replace')
const flow = require('rollup-plugin-flow')
const version = process.env.VERSION || require('../package.json').version

module.exports = {
  entry: 'src/index.js',
  dest: 'dist/vuex.js',
  format: 'umd',
  moduleName: 'Vuex',
  plugins: [
    flow({ pretty: true }),
    replace({ __VERSION__: version }),
    buble()
  ],
  banner:
`/**
 * vuex v${version}
 * (c) ${new Date().getFullYear()} Evan You
 * @license MIT
 */`
}
