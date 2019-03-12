let path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/resume-app-data-source.js'
    },
    watch: true,
    mode: "development"
};
