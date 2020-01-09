const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: './js/app.js'
  },

  devtool: "source-map",

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 9000,
  },

  module: {

    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },

      {
        test: /\.(svg|jpg|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './images',
          useRelativePath: true
        },
      },

    ],
  },

  plugins: [

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body',
    }),

    new MiniCssExtractPlugin({
      filename: './css/style.css',
    }),

    new CopyWebpackPlugin([
      { from: './src/fonts', to: './fonts' },
      { from: './src/images', to: './images' },
    ]),

  ],
}

module.exports = config;
