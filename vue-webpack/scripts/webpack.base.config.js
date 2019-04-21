
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (options) => ({
    entry: [path.resolve(__dirname, '../src/index.js')],
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].[hash].js',
      chunkFilename: 'chunk.[name].[chunkhash].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              query: {
                "presets": ["@babel/preset-env"],
                "plugins": ["@babel/plugin-transform-runtime", "@babel/plugin-syntax-dynamic-import", "@babel/plugin-proposal-class-properties"]
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.(css|less|scss|sass)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'less-loader',
          ],
        },
        {
          test: /\.vue$/,
          use: ['vue-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg|ttf|woff|woff2|eot)(\?\S*)?$/,
          use: [
            {
              loader: 'file-loader',
              query: {
                name: '[name].[hash].[ext]'
              },
            }
          ]
        }
      ]
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
            enforce: true
          },
          vendor: {
            test: /node_modules/,
            chunks: "all",
            name: "vendor",
            priority: 10,
            enforce: true,
          }
        }
      },
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[chunkhash].css",
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../src/index.html'),
        inject: 'body',
      }),
    ],
    resolve: {
      extensions: ['*', '.js', '.vue'],
      alias: {
        'api': path.resolve(__dirname, `../src/api`),
        'pages': path.resolve(__dirname, `../src/pages`),
        'components': path.resolve(__dirname, `../src/components`),
        'utils': path.resolve(__dirname, `../src/util`),
        'resources': path.resolve(__dirname, `../src/resource`),
      },
    }
  })
