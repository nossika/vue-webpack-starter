const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, '../../dist'),
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
              "plugins": ["@babel/plugin-transform-runtime", "@babel/plugin-syntax-dynamic-import", "@babel/plugin-proposal-class-properties"],
            },
          },
        ],
        exclude: /node_modules/,

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
              name: '[name].[hash].[ext]',
            },
          }
        ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['*', '.js', '.vue'],
    alias: {
      'api': path.resolve(__dirname, `../../src/api`),
      'pages': path.resolve(__dirname, `../../src/pages`),
      'components': path.resolve(__dirname, `../../src/components`),
      'utils': path.resolve(__dirname, `../../src/util`),
      'resources': path.resolve(__dirname, `../../src/resource`),
    },
  },
}