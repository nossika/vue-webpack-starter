const webpack = require('webpack');
const config = require('./config/webpack.client.config');
const merge = require('webpack-merge');
const del = require('del');
const path = require('path');

const compiler = webpack(merge(config, {
  plugins: [
    new webpack.ProgressPlugin((percentage, msg) => {
      console.log(`${(percentage * 100).toFixed(2)}%: ${msg}`);
    }),
  ],
}));

(async() => {
  await del([path.resolve(__dirname, '../dist/**')]);
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
})()

