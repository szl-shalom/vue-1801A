const Mock = require("mockjs");

module.exports = Mock.mock({
    "list|10": [{
        "title": "@ctitle",//随机标题
        "name": "@cname",
        "url": "@image(300x250)",
    }]
})