const path = require("path");
const webpack = require("webpack");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {

  entry: [
    "./src/js/index.jsx"
  ],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist/js/"),
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader' // config in .babelrc
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.jpg'],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  }

}
