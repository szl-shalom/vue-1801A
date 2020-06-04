const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {  //多个入口文件
        index: "./src/index.js",
        app: "./src/app.js"
    },
    output: {
        // 通过占位符 保留源文件的名字
        filename: "[name]-[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 指定模板文件
            template: "./src/index.html",
            // 指定引入JS文件
            chunks: ["index"],
            // 生成以后的名字
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/app.html",
            chunks: ["app"],
            filename: "app.html"
        })
    ]
}