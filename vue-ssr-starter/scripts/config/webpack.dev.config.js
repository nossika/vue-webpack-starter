const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpack = require('webpack');

module.exports = (options) => {
  const { PORT } = options;
  return merge(baseConfig, {
    entry: [
      path.resolve(__dirname, '../../src/entry-client.js'),
      `webpack-dev-server/client?http://localhost:${PORT}/`,
      'webpack/hot/dev-server',
    ],
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.(css|less)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'less-loader',
          ],
        },
      ],
    },
    optimization: {
      runtimeChunk: {
        name: 'manifest',
      },
      minimize: true,
      splitChunks: {
        chunks: 'async',
        cacheGroups: {
          commons: {
            name: "common",
            chunks: "all",
            minChunks: 3,
            enforce: true,
          },
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
          vendor: {
            test: /node_modules/,
            chunks: "all",
            name: "vendor",
            priority: 10,
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[chunkhash].css",
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../../src/index.html'),
        inject: 'body',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new OpenBrowserPlugin({ url: `http://localhost:${PORT}/` }),
      new webpack.DefinePlugin({
        PORT: JSON.stringify(PORT),
      }),
    ],
  });
};



