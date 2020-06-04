const { resolve } = require("path");
// 引入模板插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 引入抽离Css插件 独立CSS文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 引入清空目录插件  (一定要解构出来)
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 引入压缩css
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
// 引入数据
const data = require("./mock/data.js");
module.exports = {
    // 模式
    mode: "none",
    // 指定入口文件  src下的index.js
    entry: "./src/index.js",
    // 指定出口文件  打包出口文件名称 bundle.js  打包到dist目录
    output: {
        filename: "bundle.js",
        path: resolve(__dirname, "dist")
    },
    // 插件
    plugins: [
        // 模板插件
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        // 抽离CSS插件
        new MiniCssExtractPlugin({
            filename: "assets/css/[name].css"
        }),
        // 清空目录插件
        new CleanWebpackPlugin(),
        // 优化css
        new OptimizeCssAssetsWebpackPlugin(),
    ],
    // 配置loader 
    module: {
        /**
         * @param [rules] 是一个数组 每一个对象是一个小规则
         */
        rules: [
            {
                test: /\.(sc|c|sa)ss$/,
                // loader: "style-loader!css-loader!sass-loader",
                // loader: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
                // style-loader css-loader sass-loader node-sass 
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: "css-loader",
                }, {
                    loader: "sass-loader",
                }]
            },
            {
                test: /\.(jpe?g|png|gif|webp)/,
                use: [{
                    loader: "url-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "assets/img/",
                        limit: 40000,
                    }
                }]
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff2?)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "assets/font/",
                    }
                }]
            }
        ]
    },
    // 配置路径
    resolve: {
        alias: {
            "@": resolve(__dirname, "src")
        }
    },
    // 开发服务器
    devServer: {
        port: "3000",
        host: "127.0.1.1",
        // open: true,
        hot: true,
        before(app) {
            app.get("/api/list", (req, res) => {
                res.json(data)
            })
        }
    },
    // 映射
    devtool: "source-map"
}