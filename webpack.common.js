const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  // entry: './src/playground/firebaseAuthGoogle.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.s?css$/,
      use: [
        { 
          loader: 'style-loader',
          options: { sourceMap: true }
        }, {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, { 
          loader: 'postcss-loader',
          options: { sourceMap: true } 
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    }]
  }
};