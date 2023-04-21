const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const proxy = require('./src/setupProxy');
const dotenv = require("dotenv");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  isProduction ? dotenv.config() : dotenv.config({ path: "./.env.development" });

  return {
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "hidden-source-map" : "eval",
    entry: "./src/index.tsx",
    devServer: {
      hot: true,
      historyApiFallback: true,
      proxy: proxy,
      //port: 8083,
    },
    target: "web",
    output: {
      path: path.join(__dirname, "/build"),
      filename: "[name].js",
      publicPath: "/",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        minify:
          process.env.NODE_ENV === "production"
            ? {
                collapseWhitespace: true, // 빈칸 제거
                removeComments: true, // 주석 제거
              }
            : false,
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new CleanWebpackPlugin(),
    ],
    resolve: {
      modules: [__dirname, "src", "node_modules"],
      extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
      alias: {
        src: path.resolve(__dirname, "src/"),
        //"@common": path.resolve(__dirname, "src/components/@common/"),
        // "@hooks": path.resolve(__dirname, "src/hooks/"),
      },
    },
    module: {
      rules: [
        {
          test: /\.ts$|tsx/,
          exclude: /node_modules/,
          loader: require.resolve("babel-loader"),
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.png|jpg|gif$/,
          use: ["file-loader"],
        },
        {
          test: /\.svg$/,  
          use: ['@svgr/webpack'],
        },
      ],
    },
  }
};