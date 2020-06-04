<template>
    <li>
        <dl @click="gotoDetail">
            <dd>
                <img :src="item.littleImageUrl" alt />
            </dd>
            <dt>
                <p>{{ item.spuName }}</p>
                <p class="price">{{ item.currentPrice }}￥/1{{ item.unit }}</p>
                <btn-num :num="getNum()" :spuId="item.spuId" :key="item.spuId" :item="item" />
            </dt>
        </dl>
    </li>
</template>

<script>
import btnNum from "@/components/btnNum.vue";
export default {
    props: ["item"],
    components: {
        btnNum
    },
    methods: {
        getNum() {
            let userData = JSON.parse(localStorage.getItem("user-car")) || [];
            let res = userData.find(item => item.spuId === this.item.spuId);
            return res ? res.count : 0;
        },
        gotoDetail() {
            this.$router.push(`/detail/${this.item.spuId}`);
        }
    }
};
</script>

<style lang="scss" scoped>
li {
    width: 100%;
    height: 150px;
    dl {
        width: 100%;
        height: 150px;
        padding: 10px;
        display: flex;
        dd {
            width: 100px;
            height: 100px;
            img {
                width: 100px;
                height: 100px;
            }
        }
        dt {
            flex: 1;
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            .price {
                color: red;
            }
        }
    }
}
</style>