const { resolve } = require("path");//引入node核心模块path


// webpack配置文件
module.exports = {
    // 打包入口文件
    entry: "./1.js",
    // 打包出口
    output: {
        // 出口文件名称
        filename: "oo.js",
        // 出口文件夹  (注意必须是绝对路径)
        path: resolve(__dirname, "qwe")
    },
    // 开发服务器
    devServer: {
        port: 3000, //端口号
        host: "127.1.0.1", //主机地址
        open: true, //是否开启服务的时候打开浏览器
        hot: true,//热跟新
    },
    // 处理模块
    module: {
        // 规则
        rules: [{
            test: /\.jpg$/,
            loader: "file-loader"
        }]
    }
}