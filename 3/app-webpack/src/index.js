import Axios from "axios";
import "@/scss/index.scss";


// 数据请求
Axios.get("/api/list").then(res => {
    console.log(res.data)
})