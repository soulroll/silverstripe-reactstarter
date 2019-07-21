const path = require("path");
const webpack = require("webpack");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {

  entry: [
    './src/index.jsx',
    './src/scss/main.scss'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "./dist/js/"),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.jpg'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  }

}
