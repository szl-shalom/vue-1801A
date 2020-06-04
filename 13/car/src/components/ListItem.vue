<template>
    <div class="list-item">
        <dl>
            <dd>
                <img :src="item.littleImageUrl" alt />
            </dd>
            <dt>
                <p>{{ item.spuName }}</p>
                <p>￥{{ item.currentPrice }}</p>
                <btn-num :num="getCount()" :key="item.spuId" :item="item" />
            </dt>
        </dl>
    </div>
</template>

<script>
import btnNum from "@/components/BtnNum";
export default {
    props: ["item"],
    created() {
        console.log(this.item);
    },
    components: {
        btnNum
    },
    methods: {
        getCount() {
            // 获取本地存储的数据
            let listData = JSON.parse(localStorage.getItem("listData")) || [];
            // 通过唯一 spuId 找数据
            let res = listData.find(item => item.spuId === this.item.spuId);
            
            return res ? res.count : 0;
        }
    }
};
</script>

<style lang="scss" scoped>
.list-item {
    width: 100%;
    height: 150px;
    dl {
        padding: 20px;
        display: flex;
        dd {
            width: 100px;
            height: 100px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        dt {
            flex: 1;
        }
    }
}
</style>