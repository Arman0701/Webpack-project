# To-Do  List with webpack

## Webpack initialization

    1 . For first create gitignore file and add there node_modules folder
    2 .  Then we have to initialize our project , open console and rite :  npm init
    3 . Then install webpack and webpack-cli:
        npm i webpack
        npm i webpack-cli
    4 . Then create webpack config file and name it : webpack.config.js
    5 . For building HTML files we have to install Html plugin , open console and write : npm i html-webpack-plugin
    6 . Open webpack.config.js and add there this default code : 
```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
```

    7 . Open package.json file and new script in script : "build": "webpack --mode production" 
    8 . Then we have to load css loader module from npm , write this in console : npm i css-loader
    and nmp i mini-css-extract-plugin . 
    P.S. I don't know why but without this:mini-css-extract-plugin plugin css file is not loading
    9 . Then we have to make some changes in webpack.config.js file , import css loader and use it in code like this :

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
};
```

     10 . And then we have to load clean-webpack-plugin to clean cache of webpack work, write in console 
     npm i clean-webpack-plugin
     11 . For minimizing css file we have to install css-minimizer-webpack-plugin , 
     npm i css-minimizer-webpack-plugin
     12 . After that we have to use that module in webpack config file 
   [See documentation](https://webpack.js.org/plugins/mini-css-extract-plugin/)

     13 ․ The final code is 
```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
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
    minimizer: [new CssMinimizerPlugin(), "..."]},
};
```

     14 . Then then we finally can run build process :)

     npm run build 

     15 . Now we have minified 3 files
     Congratulations :)