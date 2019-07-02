
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
          test: /\.jsx?$/,
          use: [
            {
              loader: 'babel-loader',
              query: {
                "presets": ["@babel/preset-env", "@babel/preset-react"],
                "plugins": [
                  "@babel/plugin-transform-runtime", 
                  "@babel/plugin-syntax-dynamic-import", 
                  "@babel/plugin-proposal-class-properties",
                  ["babel-plugin-import", { libraryName: 'antd', style: 'css' }],
                ],
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.(css|less)$/,
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
            test: /\.(css|less|sass|scss)$/,
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
      extensions: ['*', '.js', '.jsx'],
      alias: {
        'api': path.resolve(__dirname, `../src/api`),
        'pages': path.resolve(__dirname, `../src/pages`),
        'components': path.resolve(__dirname, `../src/components`),
        'utils': path.resolve(__dirname, `../src/util`),
        'resources': path.resolve(__dirname, `../src/resource`),
      },
    }
  })
