const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: './dist',
    open: false,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: "public/index.html"
    }),
    new ForkTsCheckerWebpackPlugin(),
    new Dotenv(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    preferAbsolute: true,
    extensions: ['.tsx', '.ts', '.js'],
    // modules: [options.paths.src, "node_modules"],
    // mainFiles: ["index"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(?:js|mjs|cjs|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: "defaults",
            presets: [
              '@babel/preset-env', 
            ],
          }
        }
      }
    ]
  }
};
