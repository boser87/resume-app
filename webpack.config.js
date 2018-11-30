var webpack = require('webpack');
var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebPackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = {
    context: path.resolve(__dirname, 'app/backoffice'),
    entry: {
        app: './app.js',
        vendor: ['angular', 'angular-route', 'jquery']
    },
    output: {
        path: __dirname + '/dist/backoffice',
        filename: 'js/[name].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                    enforce: true
                },
            }
        },
        runtimeChunk: false
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html"
        }),
        new CopyWebpackPlugin([{
            from: '**/*.html',
            force: true
        }])
    ]
};
