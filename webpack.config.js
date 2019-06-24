const path = require( 'path' );
const webpack = require( 'webpack' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const _ = require( 'lodash' );

/*-------------------------------------------------*/

module.exports = {

    // webpack optimization mode
    mode: 'development',

    // entry file(s)
    entry: path.resolve( __dirname, 'src/index.js' ),

    // output
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js'
    },

    // module/loaders configuration
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            {
                test: /\.scss$/,
                use: [  MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader' ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin( {
            filename: 'styles.css'
        } ),

        new HTMLWebpackPlugin( {
            template: path.resolve( __dirname, 'src/index.html' )
        } )
    ],

    // generate source map
    devtool: 'source-map'

};