/**
 * @module
 * @author: hjava
 * @since: 2016/12/17 16:49
 */

'use strict';

var path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        path: 'dist',

        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]

    },
    resolve: {
        alias: {}
    },
    devtool: 'source-map'
};

