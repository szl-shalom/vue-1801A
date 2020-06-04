# 入口文件
```javascript
    entry："路径"
```
# 出口文件
```javascript
    output:{
        filename:"出口文件名称",
        path:"出口文件的路径" (绝对路径)
    }
```
# 插件
- 指定模板HTML文件
- 安装 npm isntall html-webpack-plugin -D
```javascript
    // 引入
    const HtmlWebpackPlugin = require("html-webpack-plugin");
    // webpack.config.js 配置
    plugins:[
        new HtmlWebpackPlugin({
            template:"模板文件的路径"
        })
    ]
```