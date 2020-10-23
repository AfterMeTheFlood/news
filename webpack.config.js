const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const commonConfig = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "News Fusion",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  stats: {
    colors: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};

const productionConfig = {
  mode: "production",
};

const developmentConfig = {
  mode: "development",
  devtool: "eval-cheap-source-map",
  devServer: {
    hot: true,
    open: true,
    port: 9000,
  },
};

module.exports = (env) => {
  console.log("env: ", env);
  if (env.production) {
    return merge(commonConfig, productionConfig);
  } else if (env.development) {
    return merge(commonConfig, developmentConfig);
  } else {
    throw new Error("No matching configuration was found!");
  }
};
