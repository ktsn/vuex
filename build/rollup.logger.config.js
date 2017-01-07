const buble = require('rollup-plugin-buble')
const flow = require('rollup-plugin-flow')

module.exports = {
  entry: 'src/plugins/logger.js',
  dest: 'dist/logger.js',
  format: 'umd',
  moduleName: 'createVuexLogger',
  plugins: [
    flow({ pretty: true }),
    buble()
  ]
}
