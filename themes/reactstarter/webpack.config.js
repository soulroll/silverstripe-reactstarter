const path = require("path");
const webpack = require("webpack");
const devMode = process.env.NODE_ENV !== 'production';
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {

  entry: [ // webpack entry point. Module to start building dependency graph
    './src/index.jsx',
    './src/scss/main.scss'
  ],

  output: {
    filename: 'bundle.js', // Name of generated bundle after build
    path: path.resolve(__dirname, "./dist/js/"), // Folder to store generated bundle
    publicPath: '/' // public URL of the output directory when referenced in a browser
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

  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['public'] }
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.jpg'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  }

}
