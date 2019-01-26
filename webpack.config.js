const webpack = require('webpack');
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    app: './src',
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {

  },
  plugins: [],
  optimization: {},
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
};