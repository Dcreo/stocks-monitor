const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = (env: any) => {
  const isDev = env.mode || "development"

  return {
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
      new MiniCssExtractPlugin(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      preferAbsolute: true,
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [{
            loader: isDev ? MiniCssExtractPlugin.loader : "style-loader",
          }, {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                auto: (path: string) => Boolean(path.includes(".module.")),
                localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
                namedExport: true,
                exportLocalsConvention: 'as-is'
              },
            }
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }]
        },
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
  }
};
