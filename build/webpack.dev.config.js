const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const entryPath = path.resolve('./index.js')
const distPath = path.resolve('./dist')
const modulesPath = path.resolve('./modules')

module.exports = {
  mode: 'development',
  entry: entryPath,
  output: {
    path: distPath,
    filename: 'compare.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        include: modulesPath,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(jpe?g|png|gif|bmp)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'url-loader',
          options: {
            fallback: 'file-loader',
            limit: 2048,
            name: '[name].[ext]'
          }
        }]
      },
      {
        test: /\.(svg|eot|woff|ttf|woff2|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'ulikegame.css',
      disable: false,
      allChunks: true
    })
  ]
}
