// import "@/scss/index.scss";
import "@/font/iconfont.css";

import Axios  from "axios";

Axios.get("/api/list").then(res=>{
    console.log(res.data)
})
