const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base.config');

const config = baseConfig();

config.mode = 'production';

config.plugins.push(
  new webpack.ProgressPlugin((percentage, msg) => {
    console.log(`${(percentage * 100).toFixed(2)}%: ${msg}`);
  }),
  new CleanWebpackPlugin(
    {
      verbose: true,
      dry: false,
    }
  ),
);

const compiler = webpack(config);

compiler.run((err, stats) => {
  if (err) {
    console.error(err.stack || err.details || err);
    return;
  }
  if (stats.hasErrors()) {
    console.error(stats.toJson().errors);
    return;
  }
  console.log('build done');
});