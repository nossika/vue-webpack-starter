const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const path = require('path');

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, '../../src/entry-server.js'),
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
  },
  externals: nodeExternals({
    whitelist: /\.(css|less)$/,
  }),
  plugins: [
    new VueSSRServerPlugin(),
  ],
});