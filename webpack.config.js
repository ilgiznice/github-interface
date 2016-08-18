const path = require('path')

module.exports = {
  entry: {
    js: ['babel-polyfill', path.join(__dirname, 'app')]
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'app'),
      loader: 'babel-loader'
    }]
  }
}
