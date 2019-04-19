const path = require('path');
const config = {
    entry: {
        main: path.resolve(__dirname, '../src/main')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/chunk.[name].[chunkhash].js'
    },
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
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    "presets": ["env", "stage-0"],
                    "plugins": ["transform-runtime", "transform-decorators-legacy"]
                }
            },
            {
                test: /\.(css|less)$/,
                loader: 'style-loader!css-loader!less-loader'
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
    resolve: {
        alias: {
            'components': path.resolve(__dirname, '../src/components'),
            'containers': path.resolve(__dirname, '../src/containers'),
            'utils': path.resolve(__dirname, '../src/utils'),
            'style': path.resolve(__dirname, '../src/style'),
            'resources': path.resolve(__dirname, '../src/resources'),
        },
        extensions: ['*', '.ts', '.tsx', '.js', 'jsx', '.json'],
    },
};

module.exports = config;