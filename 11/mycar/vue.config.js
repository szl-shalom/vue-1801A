const data = require("./mock/data.js")
module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => {
                res.json(data)
            })
        }
    }
}