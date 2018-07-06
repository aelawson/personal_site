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
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
      loader: 'file-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'favicon.ico',
      filename: __dirname + '/dist/index.html',
      template: __dirname + '/index.html'
    })
  ]
}