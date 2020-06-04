const HtmlWebpacklPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => {
                res.json("哈哈哈哈")
            })
        }
    },
    plugins: [
        new HtmlWebpacklPlugin()
    ],
    module: {
        rules: [{
            test: /\.css/,
            loader: "style-loader!css-loader"
        }]
    }
}