const data = require("./mock/data.js");
const user = [{
    username: "史志龙",
    password: "123",
}, {
    username: "张三",
    password: "1234",
},
{
    username: "1234",
    password: "1234",
}]


module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => res.json(data));

            app.post("/api/user/login", (req, res) => {
                let str = "";
                req.on("data", chunk => {
                    str += chunk;
                })

                req.on("end", () => {
                    let { username, password } = JSON.parse(str);
                    console.log(username, password)
                    let result = user.find(item => item.username === username && item.password === password);
                    console.log(result)
                    if (result) {
                        res.json({
                            code: 1,
                            mess: "success", 
                            username,
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
    }
}