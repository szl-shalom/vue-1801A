const data = require("./mock/data.js");
const bodyParser = require("body-parser");
module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.use(bodyParser.urlencoded({
                extended: false
            }))

            app.use(bodyParser.json())
            // 登录接口
            app.post("/api/user/login", (req, res) => {
                // 解构出来 用户名和密码
                let {
                    username,
                    password
                } = req.body;
                // 验证
                username === "admin" && password === "123" ?
                    res.json({
                        username: "admin",
                        code: 1,
                        mess: "success"
                    }) :
                    res.json({
                        code: 0,
                        mess: "账户密码必须是admin和123^_^"
                    })

            })
            // 获取数据接口
            app.get("/api/list",(req,res)=>{
                res.json(data)
            })
        }
    }
}