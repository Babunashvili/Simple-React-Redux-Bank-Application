var path = require('path');
var config = {
    context: path.join(__dirname, "./"),
    entry: './app/index.js',
    output: {
        path: './public/dist/js',
        filename: 'app.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};

module.exports = config;