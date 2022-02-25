const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "Project Webpack"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      "...",
    ],
  },
};