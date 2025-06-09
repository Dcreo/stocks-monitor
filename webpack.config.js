const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:js|mjs|cjs|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: "defaults",
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      }
    ]
  }
};
