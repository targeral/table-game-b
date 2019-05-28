/**
 * @file 基础配置
 * @author yangmutong
 */

/* eslint-env node */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {ROOT, PUBLIC_PATH, OUTPUT_PATH, isProdMode, ENTRIES, PAGES} = require('./util');

const theme = require(path.resolve(ROOT, './package.json')).theme;

if (isProdMode && false) {
    Object.assign(theme, {
        'icon-url': path.join(PUBLIC_PATH, theme['icon-url'])
    });
}

const copies = [];

const baseConfig = {
    entry: ENTRIES,
    output: {
        path: OUTPUT_PATH
    },
    resolve: {
        modules: [
            path.resolve(ROOT, 'src'),
            path.resolve(ROOT, 'node_modules')
        ],
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', {
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true,
                        modifyVars: theme
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'static/img/[name]-[hash:5].[ext]',
                        limit: 8192
                    }
                }]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(#.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'static/fonts/[name].[ext]',
                        limit: 8192
                    }
                }]
            }
        ]
    },
    plugins: [
        ...PAGES.map(({name, config}) => {
            let chunks = [name];
            const filename = path.resolve(OUTPUT_PATH, config.name || `${name}.html`);
            if (isProdMode) {
                const runtime = `runtime.${name}`;
                chunks = [runtime, 'vendors', name];
            }
            return new HtmlWebpackPlugin({
                template: path.resolve(ROOT, './template.ejs'),
                filename,
                chunks,
                name,
                title: config.title
            });
        }),
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
        new CopyWebpackPlugin(copies),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.ENV_MODE': JSON.stringify(process.env.ENV_MODE || 'online')
        }),
        new ForkTsCheckerWebpackPlugin()
    ]
};

module.exports = baseConfig;
