const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const baseConfig = require('./webpack.base.config');

const config = baseConfig();

let PORT = process.env.PORT || 8080;

config.mode = 'development';
config.devtool = 'eval-source-map';

config.output.publicPath = `http://localhost:${PORT}/`;

config.entry.push(
  `webpack-dev-server/client?http://localhost:${PORT}/`,
  'webpack/hot/dev-server',
);

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    PORT: JSON.stringify(PORT),
  }),
);

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  port: PORT,
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
  headers: {
    'Access-Control-Allow-Origin': '*',
  }, 
});

server.listen(PORT, 'localhost', (err) => {
  console.log(`start dev at http://localhost:${PORT}/`);
});


