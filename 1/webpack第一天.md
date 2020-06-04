# 安装？
- npm install webpack webpack-cli -d 本地安装（推荐）
- npm install webpack webpack-cli -g 全局安装（不建议）

# 打包
- 命令行 
```javascript
    npx webpack 文件路径  （注意要加上npx才可以执行本地命令）
    npx webpack 文件路径 -o 路径
```
- 修改package.json属性scripts
```jascript 
    "build": "webpack", 
    "serve": "webpack-dev-server"

    执行
    npm run build
    npm run serve  (需要安装webpack-dev-server)
```

# entry--output
```
 // 打包入口文件
    entry: "./1.js",
    // 打包出口
    output: {
        // 出口文件名称
        filename: "oo.js",
        // 出口文件夹  (注意必须是绝对路径)
        path: resolve(__dirname, "qwe")
    },
```

# webpack-dev-server
```
    devServer: {
        port: 3000, //端口号
        host: "127.1.0.1", //主机地址
        open: true, //是否开启服务的时候打开浏览器
        hot: true,//热跟新
    },

```

# loader
```
    命令行执行 npm install file-loader -D
    修改
    module:{
        rules:[{
            test:/\.jpg$/,
            loader:"file-loader"
        }]
    }
```
