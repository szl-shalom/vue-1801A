<template>
    <div id="app">
        <div class="main">
            <list-item v-for="(item,index) in list" :key="index" :item="item"></list-item>
        </div>
        <div class="footer">
            <all-price
                :allPrice="allPrice"
                :allCount="allCount"
                :checkAll="checkAll"
                @change="change"
            />
        </div>
    </div>
</template>

<script>
import Axios from "axios";
import ListItem from "./components/listItem";
import allPrice from "./components/allPrice";
export default {
    created() {
        Axios.get("/api/list").then(res => {
            this.list = res.data.list;
            console.log(this.list);
        });
    },
    components: {
        ListItem,
        allPrice
    },
    data() {
        return {
            list: []
        };
    },
    computed: {
        allPrice() {
            return this.list.reduce(
                (p, n) => (n.flag ? p + n.price * n.num : p),
                0
            );
        },
        allCount() {
            return this.list.reduce((p, n) => (n.flag ? p + n.num : p), 0);
        },
        checkAll() {
            return this.list.every(item => item.flag);
        }
    },
    methods: {
        change(type) {
            // 让每一个
            this.list.forEach(item => (item.flag = type));
        }
    }
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}
html,
body {
    width: 100%;
    height: 100%;
}
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    .main {
        flex: 1;
    }
    .footer {
        height: 60px;
        background: skyblue;
    }
}
</style>
