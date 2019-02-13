let path = require('path');
let HtmlWebPackPlugin = require("html-webpack-plugin");
let CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './js/app.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/css',
        filename: 'js/[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html"
        }),
        new CopyWebpackPlugin([{
            from: '**/*.html',
            force: true
        }])
    ],
    watch: true,
    mode: "development"
};
