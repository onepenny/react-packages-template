/**
 * Created by juecai on 2017/1/4.
 */
/* eslint-disable */
var webpack = require('webpack');
var px2rem = require('postcss-px2rem');
var autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var ip = require('ip');

const {TARGET=''} = process.env;
const PACKAGES = 'packages';

let publicPath = `/`;

var config = {
	devtool: "source-map",
    entry: {
        portal_template: `./${PACKAGES}/${TARGET}/src/main.js`,
    },
    output: {
        chunkFilename: "[hash].[name].js",
        filename: 'js/[name].js',
        publicPath: publicPath,
        path: `./${PACKAGES}/${TARGET}/dist`,
    },
	devServer: {
		disableHostCheck: true //为了解决webpack-dev-server: v1.16版本删除node_modules之后重新安装会出现 invalid host header 的问题。
	},
    eslint: {
        configFile: './.eslintrc'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'babel?presets[]=react,presets[]=es2015,presets[]=stage-0&cacheDirectory=true'
                    // 'babel?presets[]=react'
                ],
                exclude: /node_modules/,
            },
            // 在开发环境开启此处
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader'
            // },
            {
                test: /\.(js)$/, // i18n国际化语言包,用babel来转译
                exclude: /node_modules/,
                include: /i18n/,
                loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0&cacheDirectory=true'
            },
            // {
            // test.js: /\.jsx$/,//jsx格式使用es6编译
            // loaders: [
            //     // 'react-hot',
            // 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0&cacheDirectory=true'
            // ], // <-- changed line
            // exclude: /node_modules/
            // },
            {
            // 让 skin 目录兼容 es6
            test: /\.js$/,
            loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0&cacheDirectory=true',
            include: /skin/,
            exclude: /node_modules/,
        }, {
            test: /\.less$/,
            loader: 'style!css!postcss-loader!less',
            exclude: /node_modules/
        }, {
            test: /\.css/,
            loader: 'style!css?sourceMap!less',
            exclude: /node_modules/
        },
            // {
            //     test: /\.(jpg|png|gif|svg|ico)$/,
            //     loader: 'url?limit=1024',
            //     exclude: /node_modules/
            // },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 1024,
                    name: 'image/[name].[ext]'
                }
            },


        ]
    },
    postcss: function () {
        return [px2rem({remUnit: 16}), autoprefixer];
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     // 基础 URL 地址, 根据环境变量加载不同的配置文件
        //     ENV_BASE_URL: JSON.stringify(__dirname + "/rjs/config/" + (process.env.NODE_ENV || "dev"))
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "common",
        //     minChunks: 4
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: true
        // })
        // new HtmlWebpackPlugin({
        //     template: `./${PACKAGES}/pages/index.html`,
        //     chunks: ['commons', 'index']
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(`./${PACKAGES}/${TARGET}/public`, '/index.html'),
            inject: true,
        }),
    ],
    resolve: {
        /**
         * 文件名的拓展, 以后引入 js 或者 jsx 文件都不需要加后缀名
         */
        alias: {
            '@': path.resolve(`./${PACKAGES}/${TARGET}/src`)
        },
        extensions: ['', '.js', '.jsx']
    }
};

module.exports = config;
