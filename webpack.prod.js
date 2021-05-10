const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    output: {
         libraryTarget: 'var',
         library: 'Client'
    },
    module: {
        rules: [
            // TODO 1: Add babel Loader that match js files as development
            // TODO 2: Add Loaders for
            //    1. converting sass => css
            //    2. Turns css into commonjs
            //    3. Extract css into files
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }
        {
            test: /\.scss$/,
            use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
        }

            /* HINT: structure
        {
          test: REGEX_TO_MATCH_FILES ex. /\.js$/,
          exclude: /node_modules/,
          loader: '',
        }
       */
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
        // TODO: configure workbox-webpack-plugin
        new MiniCssExtractPlugin({ filename: "[name].css" })
        new WorkboxPlugin.GenerateSW()
    ],
    optimization: {
        // TODO: Add Optimization for JS and CSS
         minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],

    }
}
