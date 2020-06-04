const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");//指定模板文件
const data = require("./mock/data.js"); //引入数据
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //清除dist目录
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //抽离css
const OptimizeCssAssetsaWebapckPlugin = require("optimize-css-assets-webpack-plugin"); //优化压缩css
module.exports = {
    // 入口
    entry: "./src/index.js",
    // 出口
    output: {
        // 出口名称
        filename: "bundle.js",
        // 出口路径
        path: resolve(__dirname, "dist")
    },
    // 插件
    plugins: [
        // 生成模板文件
        new HtmlWebpackPlugin({
            // 指定模板文件
            template: "./src/index.html",
            // 指定生成文件的目录以及名称
            // filename: "assets/html/1.html"
            minify: {
                collapseWhitespace: true, //去除空格
                removeComments: true,//去除注释
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }, //是否压缩HTML文件
        }),
        // 打包之前清空   默认清空dist目录
        new CleanWebpackPlugin(),
        // 抽离css
        new MiniCssExtractPlugin({
            // 指定目录以及生成的文件名称
            filename: "assets/css/[name].css",
        }),
        // 压缩css
        new OptimizeCssAssetsaWebapckPlugin(),
    ],
    // 开发服务器
    devServer: {
        port: 8080,
        host: "0.0.0.0",
        hot:true,
    },
    module: {
        rules: [{
            // 处理 css | sass | scss 文件
            test: /\.(c|sc|sa)ss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,  //抽离css成为单独文件
            }, {
                loader: "css-loader",  //打包css中的import语句
            }, {
                loader: "sass-loader", //预编译处理sass文件
            }]
        }, {
            // 处理 jpg jpeg gif webp png
            test: /\.(jpe?g|gif|png|webp)$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "assets/img/"
                }
            }]
        }, {
            // 处理 html页面中的 img标签
            // 必须安装file-loader || url-loader
            test: /\.html$/i,
            loader: "html-loader"
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                // options: {
                //     presets: ["@babel/preset-env"]
                // }
            }]
        }, {
            // 处理字体图标文件 eot svg ttf woff2?
            test: /\.(eot|svg|ttf|woff2?)$/,
            use: [{
                loader: "file-loader",
                options: {
                    outputPath: "assets/font",
                    name: "[name].[ext]"
                }
            }]
        }]
    },
    // 模式
    mode: "development",
    // 配置映射关系  解决报错
    devtool: "source-map",
}

