const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          "file-loader"
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(c|d|t)sv$/,
        use: ["dsv-loader"]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        query: {
          interpolate: 'require'
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
  ],
  output: {
    path: path.resolve(process.cwd(), 'build'),
  },
};