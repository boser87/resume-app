let path = require('path');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let HtmlWebPackPlugin = require("html-webpack-plugin");
let CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
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
    ],
    mode: "development"
};
