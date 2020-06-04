const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const data = require("./mock/data.js")
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
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],
    // 开发服务器
    devServer: {
        port: 8888,
        host: "127.0.0.1",
        // 监听端口号 拦截接口
        before(app) {
            //  监听 /api/list接口
            app.get("/api/list", (req, res) => {
                res.json(data)
            })
        }
    },
    module: {
        rules: [{
            // 处理 css | sass | scss 文件
            test: /\.(c|sc|sa)ss$/,
            use: [{
                loader: "style-loader",
            }, {
                loader: "css-loader",
            }, {
                loader: "sass-loader",
            }]
        }]
    },
    resolve: {
        alias: {
            // 配置别名
            "@": resolve(__dirname, "src")
        }
    }
}


