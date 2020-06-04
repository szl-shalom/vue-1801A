const data = require("./mock/data.js");
const { resolve } = require("path");

module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => {
                res.json(data);
            })

            app.get("/api/getData", (req, res) => {
                let { id } = req.query;
                console.log(id)
                res.json(data.bookMallData.find(item => {
                    return item.id === +id;
                }))
            })
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": resolve(__dirname, "src")
            }
        }
    }
}