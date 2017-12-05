const baseConfig = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let outputPath = path.resolve(
    __dirname,
    '../dist'
);

baseConfig.output.path = outputPath;

module.exports = Object.assign(baseConfig, {
    module: {
        rules: [
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
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!less-loader",
                })
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
    devtool: '#source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: ({resource}) => /node_modules/.test(resource)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
        }),
        new ExtractTextPlugin({
            filename: '[hash].css',
            allChunks: false,
        }),
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
            [outputPath + '/*'],
            {
                root: path.resolve(__dirname, '../'),
                verbose:  true,
                dry:      false
            }
        ),
    ]
});