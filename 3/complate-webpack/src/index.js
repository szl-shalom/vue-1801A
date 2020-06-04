import Axios from "axios";
import "./scss/index.scss";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import "./font/iconfont.css";

new Swiper(".swiper-container", {
    autoplay: {
        delay: 2000,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination"
    }
})


