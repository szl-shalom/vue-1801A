const bodyParser = require("body-parser");
const data = require("./mock/data.js")
module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            // 使用中间件 处理表单数据和json数据
            app.use(bodyParser.urlencoded({
                extended: false
            }))
            app.use(bodyParser.json())
            // 登录接口
            app.post("/api/user/login", (req, res) => {
                // 解构账户和密码
                let {
                    username,
                    password
                } = req.body;
                // 用户密码是否等于admin 和 123
                if (username === "admin" && password === "123") {
                    res.json({
                        code: 1,
                        mess: "登录成功",
                        token: "admin", //用户唯一标识符
                    })
                } else {
                    res.json({
                        code: 0,
                        mess: "账户密码必须是admin和123^_^"
                    })
                }
            })

            // 访问数据接口
            app.get("/api/getData", (req, res) => {
                res.json(data)
            })
        }
    }
}