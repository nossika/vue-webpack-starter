const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const getConfig = require('./config/webpack.dev.config');

let PORT = process.env.PORT || 8080;

const config = getConfig({ PORT });
config.mode = 'development';

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  hot: true,
  inline: true,
  publicPath: `/`,
  contentBase: `/`,
  index: 'index.html',
  historyApiFallback: true,
  historyApiFallback: {
    rewrites: [
      { from: /./, to: `/` },
    ],
  },
});

server.listen(PORT, 'localhost', (err) => {
  console.log(`start dev at http://localhost:${PORT}/`);
});


