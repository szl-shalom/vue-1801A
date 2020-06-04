const data = require("./mock/data.js");
const user = [{
    username: "123",
    password: "123"
}, {
    username: "1234",
    password: "1234"
}]
const path = require("path");

module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => res.json(data));
            app.post("/api/user/login", (req, res) => {
                let str = "";
                req.on("data", chunk => {
                    str += chunk
                })
                req.on("end", () => {
                    let { username, password } = JSON.parse(str);
                    let result = user.find(item => item.username === username && item.password === password);
                    if (result) {
                        res.json({
                            token: username,
                            code: 1,
                            mess: "success"
                        })
                    } else {
                        res.json({
                            code: 0,
                            mess: "fail",
                            errorInfo: "账户密码错误"
                        })
                    }
                })
            })
        }
    },
    configureWebpack: {
        devtool: "source-map"
    }
}
