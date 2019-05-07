const webpack = require('webpack');
const clientConfig = require('./config/webpack.client.config');
const serverConfig = require('./config/webpack.server.config');
const merge = require('webpack-merge');
const del = require('del');
const path = require('path');

const clientCompiler = webpack(merge(clientConfig, {
  plugins: [
    new webpack.ProgressPlugin((percentage, msg) => {
      console.log(`${(percentage * 100).toFixed(2)}%: ${msg}`);
    }),
  ],
}));

const serverCompiler = webpack(merge(serverConfig, {
  plugins: [
    new webpack.ProgressPlugin((percentage, msg) => {
      console.log(`${(percentage * 100).toFixed(2)}%: ${msg}`);
    }),
  ],
}));


(async() => {
  await del([path.resolve(__dirname, '../dist/**')]);
  await new Promise((resolve) => {
    clientCompiler.run((err, stats) => {
      if (err) {
        console.error(err.stack || err.details || err);
        return;
      }
      if (stats.hasErrors()) {
        console.error(stats.toJson().errors);
        return;
      }
      resolve();
      console.log('build client done');
    });
  });

  await new Promise((resolve) => {
    serverCompiler.run((err, stats) => {
      if (err) {
        console.error(err.stack || err.details || err);
        return;
      }
      if (stats.hasErrors()) {
        console.error(stats.toJson().errors);
        return;
      }
      resolve();
      console.log('build server done');
    });
  });
  console.log('build done');
})()
