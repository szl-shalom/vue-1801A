// ES Module
import Header from "./header.js"
import SlideBar from "./slideBar.js"
import Content from "./content.js"
import url from "./1.jpg";



let img = new Image();
img.src = "qwe/" + url;
document.body.appendChild(img)


new Header()
new SlideBar()
new Content()


console.log(6)



// 引入图片


// CommonJs Module
// const Header = require("./header.js");
// const SlideBar = require("./slideBar.js");
// const Content = require("./content.js");



// AMD
// require(["./header.js", "./slideBar.js", "./content.js"], function (Header, SlideBar, Content) {
//     new Header()
//     new SlideBar()
//     new Content()
// })

// CMD
// require([], function () {
//     let Header = require("./header.js")
//     let SlideBar = require("./slideBar.js")
//     let Content = require("./content.js")
// new Header()
// new SlideBar()
// new Content()
// })




