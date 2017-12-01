const baseConfig = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let outputPath = path.resolve(
    __dirname,
    '../dist'
);

baseConfig.output.path = outputPath;

module.exports = Object.assign(baseConfig, {
    devtool: '#source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            inject: 'body'
        }),
        new CleanWebpackPlugin(
            [outputPath + '/js/*.js', outputPath + '/js/*.map'],
            {
                root: path.resolve(__dirname, '../'),
                verbose:  true,
                dry:      false
            }
        ),
    ]
});