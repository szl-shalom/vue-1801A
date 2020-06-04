const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/main",
    output: {
        filename: "bundle.js",
        path: resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development",
    module: {
        // loader:就是当webpack遇到不能打包的文件的时候，我们去告诉它怎么去打包
        /**
         * @param [rules] 是一个数组，数组包对象,每一个对象对应一个规则
         * @param [test] 是一个正则表达式，表示匹配到的模块
         * @loader [loader] 当匹配到这个文件的时候 告诉webpack怎么处理
         *  */
        rules: [{
            /**
             * @desc 当我们匹配到图片的时候
             * @loader  file-loader 和 url-loader 处理
             * @param [options] 配置
             * 
             */
            test: /\.(jpe?g|gif|png|webp)$/,
            use: {
                // 使用url-loader 必须安装file-loader
                loader: "url-loader",
                options: {
                    // 生成图片名称
                    name: "[name].[ext]",
                    // 打包图片路径
                    outputPath: "img/",
                    // 当图片小于 limit 那么使用base64打包到JS文件
                    // 当图片大于 limit  使用file-loader进行处理
                    limit: 40000,
                }
            }
        }, {
            /**
             * @param 匹配css | scss | sass
             * @loader 使用
             * style-loader 将css插入到页面
             * css-loader   将import打包成一个文件
             * sass-loader  编译scss|sass文件
             */
            test: /\.(c|sc|sa)ss$/,
            loader: "style-loader!css-loader!sass-loader",
        }, {

            /**
             * 安装 npm i babel-loader @babel/core @babel/preset-env -D
             * 配置：options:{
             *  
             * }
             */
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    // 指定使用babel主版本进行处理
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    }
}