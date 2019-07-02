const baseConfig = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign(baseConfig, {
    mode: 'development',
    devtool: '#source-map',
    devServer: {
        hot: true,
        inline: true,
        open: true,
        openPage: ''
    },
    optimization: {
        runtimeChunk: {
            name: 'manifest',
        },
        minimize: false,
        splitChunks: {
            chunks: 'async',
            cacheGroups: {
                commons: {
                    name: "common",
                    chunks: "all",
                    minChunks: 3,
                    enforce: true,
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
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});