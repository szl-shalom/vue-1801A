const { resolve } = require("path");
// 引入模板插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 配置对象
module.exports = {
    // 模式
    // development 开发模式
    // prodution   生产模式(默认)
    mode: "development",
    // 文件入口
    entry: "./src/index.js",
    // 文件出口
    output: {
        // 文件名称
        filename: "main.js",
        path: resolve(__dirname, "dist")
    },
    //  插件  为了开发起来更加方便
    plugins: [
        // 调用HTML模板插件
        new HtmlWebpackPlugin({
            // 指定打包的模板文件
            template: "./src/index.html"
        })
    ],
    // 开发服务器  为了开起来提高小路
    devServer: {
        // contentBase: "",
        host: "localhost", //主机地址
        port: 8080, //端口号
        open: true, //浏览器
    },
    // 模块
    module: {
        // loader去处理指定的文件
        // 引入规则
        rules: [{
            //正则匹配jpg文件
            test: /\.jpg$/,
            use: {  
                // 使用loader来处理
                loader: "file-loader",
                // 配置
                options: {
                    // 生成文件的名字
                    name: "[name]-[hash].[ext]",
                    // 生成文件的目录
                    outputPath: "img"
                }
            }
        }]
    }

}