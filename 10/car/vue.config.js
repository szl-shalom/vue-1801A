const Mock = require("mockjs");
module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => {
                res.json(
                    Mock.mock({
                        "list|2-5": [{
                            "url": "@image(200x100)",
                            "title": "@ctitle",
                            "price|10-100": 1,
                            "num|1-10": 1,
                            flag: false,
                        }]
                    })
                )
            })
        }
    }
}