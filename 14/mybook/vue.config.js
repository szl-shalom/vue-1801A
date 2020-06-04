const data = require("./mock/data.js")

module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => {
                res.json(data)
            })

            // 根据数据ID获取对应的参数
            app.get("/api/getData", (req, res) => {
                let {
                    id
                } = req.query;
                let result = data.find(item => +item.id === +id);
                result ? res.json(result) : res.json({
                    code: 0,
                    mess: "fail"
                })
            })

            // 登录接口
            app.get("/api/userLogin", (req, res) => {
                let {
                    username,
                    password
                } = req.query;
                let flag = username == 123 && password == 123;
                flag ? res.json({
                    code: 1
                }) : res.json({
                    code: 0
                })
            })
        }
    }
}