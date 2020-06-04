<template>
    <div id="app">
        <div class="main">
            <list-item v-for="(item,index) in list" :key="index" :item="item" :index="index"></list-item>
        </div>
        <div class="footer">
            <list-all :allPrice="allPrice" :allCount="allCount"></list-all>
        </div>
    </div>
</template>

<script>
import ListItem from "./components/ListItem";
import ListAll from "./components/ListAll";

export default {
    components: {
        ListItem,
        ListAll
    },
    data() {
        return {
            list: []
        };
    },
    created() {
        // 发起请求
        this.$http.get("/api/list").then(res => {
            this.list = res.data.list;
        });
        // 注册一个公共事件
        // this.$bus.$on("自定义事件名称",事件处理函数)
        // 调用一个公共事件
        // this.$bus.$emit("自定义事件名称")
        this.$bus.$on("add", index => {
            // console.log(index);
            this.list[index].count++;
        });

        this.$bus.$on("red", index => {
            this.list[index].count--;
            if (this.list[index].count <= 0) {
                // 删除数据  下标index
                this.list.splice(index, 1);
            }
        });
    },
    computed: {
        allPrice() {
            return this.list.reduce(
                (p, n) => (n.flag ? p + n.price * n.count : p),
                0
            );
        },
        allCount() {
            return this.list.reduce((p, n) => (n.flag ? p + n.count : p), 0);
        }
    },
    methods: {}
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
    display: flex;
    flex-direction: column;
    .main {
        flex: 1;
    }
    .footer {
        height: 46px;
        background: skyblue;
    }
}
</style>
