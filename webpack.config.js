const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./build",
    host: "localhost",
    port: "8080",
    historyApiFallback: true,
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          "ts-loader"
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({ template: path.join(__dirname, "/src/index.html") }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};
