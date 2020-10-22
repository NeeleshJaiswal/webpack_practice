const webpack = require('webpack');
const path = require('path');
const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // all loaders will be here
            // loaders enables you to use all kinds of file types
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
}
module.exports = config;