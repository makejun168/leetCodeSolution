const path = require('path');
const nodeExternals = require('webpack-node-externals');
const copyWebpackPlugin = require('copy--webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../server.js')
  },
  mode: 'development',
  target: '/node',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/server')
  },
  externals: [nodeExternals()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new copyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist')
      }
    ])
  ]
}


