const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");

const commonConfig = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "News Fusion",
      template: "./src/index.html",
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
        use: ["style-loader", "css-loader"],
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
