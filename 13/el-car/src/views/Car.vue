<template>
    <div class="container">
        <header-nav>购物车</header-nav>
        <div class="main">
            <ul class="right">
                <right-item v-for="(item,index) in list" :key="index" :item="item" />
            </ul>
        </div>
        <div class="result">
            <div>
                总价：{{ allPrice }}
                总数量：{{ allCount }}
            </div>
            <div>
                <button @click="$router.push('/pay')">去付款</button>
            </div>
        </div>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
import rightItem from "@/components/rightItem";
export default {
    data() {
        return {
            list: []
        };
    },
    created() {
        this.list = JSON.parse(localStorage.getItem("user-car")) || [];

        this.$bus.$on("updata", () => {
            this.list = JSON.parse(localStorage.getItem("user-car")) || [];
        });
    },
    components: {
        rightItem
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
.main {
    overflow: auto;
}
.result {
    display: flex;
    justify-content: space-between;
    background: skyblue;
    padding:0 20px;
    height:46px;
    align-items: center;
}
</style>