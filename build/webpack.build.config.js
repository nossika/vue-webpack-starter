const baseConfig = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let outputPath = path.resolve(
    __dirname,
    '../dist'
);

baseConfig.output.path = outputPath;

module.exports = Object.assign(baseConfig, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            "presets": ["es2015", "stage-0"],
                            "plugins": ["transform-runtime", "transform-decorators-legacy"]
                        },
                    },
                ],
                exclude: /node_modules/,

            },
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg|ttf|woff|woff2|eot)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[hash].[ext]'
                }
            }
        ]
    },
    optimization: {
        runtimeChunk: {
            name: 'manifest',
        },
        minimize: true,
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
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[hash].css"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            inject: 'body',
        }),
        new CleanWebpackPlugin(
            [outputPath + '/*'],
            {
                root: path.resolve(__dirname, '../'),
                verbose: true,
                dry: false,
            }
        ),
    ]
});