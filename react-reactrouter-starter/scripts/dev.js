const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const baseConfig = require('./webpack.base.config');

const config = baseConfig();

let PORT = process.env.PORT || 8080;

config.mode = 'development';
config.devtool = 'eval-source-map';

config.entry.push(
  `webpack-dev-server/client?http://localhost:${PORT}/`,
  'webpack/hot/dev-server',
);

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new OpenBrowserPlugin({ url: `http://localhost:${PORT}/` }),
  new webpack.DefinePlugin({
    PORT: JSON.stringify(PORT),
  }),
);

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


