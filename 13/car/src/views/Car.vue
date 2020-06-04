<template>
    <div class="container">
        <header-nav>Car</header-nav>
        <div class="main">
            <div class="right">
                <list-item v-for="(item,index) in list" :key="index" :item="item" />
            </div>
        </div>
        <div>
            总价{{ allPrice }}
            总数量{{ allCount }}
        </div>
        <footer-nav />
    </div>
</template>

<script>
import ListItem from "@/components/ListItem";
export default {
    name: "",
    data() {
        return {
            list: []
        };
    },
    created() {
        this.list = JSON.parse(localStorage.getItem("listData")) || [];
        // 自定义事件  change 重新获取本地存储
        this.$bus.$on(
            "change",
            () =>
                (this.list = JSON.parse(localStorage.getItem("listData")) || [])
        );
    },
    components: {
        ListItem
    },
    computed: {
        allPrice() {
            return this.list.reduce((p, n) => p + n.count * n.currentPrice, 0);
        },
        allCount() {
            return this.list.reduce((p, n) => p + n.count, 0);
        }
    }
};
</script>

<style lang="scss" scoped>
.right {
    overflow: auto;
}
</style>