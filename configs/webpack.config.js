const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('../package');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const argv = process.argv;
const CopyWebpackPlugin = require('copy-webpack-plugin')


const isFileCss = argv.includes('--styles');
const timestamp = Date.now();
const images = ['svg', 'jpg', 'jpeg', 'gif', 'png'];

const plugins = [
    new HtmlWebpackPlugin({
            template: './index.html',
            title: package.name,
            version: package.version
        }),
        new MiniCssExtractPlugin({filename:'style.css'}),
        new webpack.ProvidePlugin({
            React: 'react',
            Component: ['react', 'Component']
        }),
        new CopyWebpackPlugin(
            images.map(ext => ({
                from: `src/**/*.${ext}`,
                to: 'images/[name].[ext]'
            }))
        //     [ {
        //     from: 'src/**/*.js',
        //     to: 'images/[name].[ext]'
        // } ]
        )
];

if (isFileCss) {
    plugins.push(new MiniCssExtractPlugin( { filename:'style.css' } ));
}


module.exports = {
    entry: {
        main: './app.js'
    },
    context: path.resolve(__dirname, '../src'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public'),
        publicPath: '/'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-regenerator'],
                    }
                }
            },
           {
               test: /\.s?css$/,
               use: [isFileCss ? MiniCssExtractPlugin.loader : 'style-loader',
                   {loader: "css-loader"},
                   {loader: "sass-loader"}
               ]
           },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins,
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../public'),
        publicPath: '/',
        port: 8806,
        hot: true,
        historyApiFallback: true
    },
    devtool: "inline-source-map"
};
