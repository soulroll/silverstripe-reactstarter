const path = require("path");
const webpack = require("webpack");
const devMode = process.env.NODE_ENV !== 'production';
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// Silverstripe Project URL (Needed for BrowserSync)
const PROXY_URL = 'silverstripe-reactstarter.davidm.wgtn.cat-it.co.nz';

module.exports = {

  entry: [ // webpack entry point. Module to start building dependency graph
    './src/index.jsx',
    './src/scss/main.scss'
  ],

  output: {
    path: path.resolve(__dirname, "./dist/js/"), // Folder to store generated bundle
    filename: 'bundle.js', // Name of generated bundle after build
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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },

  plugins: [
    new BrowserSyncPlugin({
      proxy: PROXY_URL,
      files: ['resources/', 'public/index.php'], // Added files to watch,
      port: 8080,
      notify: true
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.jpg'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  }

}
