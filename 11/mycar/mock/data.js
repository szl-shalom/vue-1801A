const Mock = require("mockjs");


module.exports = Mock.mock({
    "list|2-10": [{
        "title": "@ctitle",
        "url": "@image(200x100)",
        "price|10-100": 1,
        "count|1-10": 1,
        "flag": false,
    }]
})