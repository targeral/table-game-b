/**
 * @file prod 配置
 * @author yangmutong
 */

/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {OUTPUT_PATH} = require('./util');
const nodeModule = (...segments) => path.join(__dirname, '../', 'node_modules', ...segments);

const prodConfig = {
    mode: 'production',
    resolve: {
        alias: {
            'react': nodeModule('react', 'umd', 'react.production.min.js'),
            'react-dom': nodeModule('react-dom', 'umd', 'react-dom.production.min.js'),
            'react-redux': nodeModule('react-redux', 'dist', 'react-redux.min.js'),
            'redux': nodeModule('redux', 'dist', 'redux.min.js')
        }
    },
    output: {
        path: OUTPUT_PATH,
        filename: '[name].[chunkhash:5].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:5].css'
        }),
        new webpack.HashedModuleIdsPlugin()
    ],
    optimization: {
        removeEmptyChunks: true,
        occurrenceOrder: true,
        sideEffects: true,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        /* eslint-disable fecs-camelcase,camelcase */
                        drop_debugger: true,
                        drop_console: true
                        /* eslint-enable fecs-camelcase,camelcase */
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    autoprefixer: {
                        disable: true
                    }
                }
            })
        ],
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'initial'
                },
                default: false
            }
        },
        runtimeChunk: {
            name: entryPoint => `runtime.${entryPoint.name}`
        }
    }
};


module.exports = merge(baseConfig, prodConfig);
