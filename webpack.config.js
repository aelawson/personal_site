const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/dist',
    compress: true,
    host: '0.0.0.0',
    disableHostCheck: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: [
        'babel-loader'
      ]
    }, {
      test: /(\.css|\.scss)$/,
      loader: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: __dirname + '/dist/index.html',
      template: __dirname + '/index.html'
    })
  ]
}