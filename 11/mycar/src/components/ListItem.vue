<template>
    <div class="list-item">
        <input type="checkbox" v-model="item.flag" />
        <img :src="item.url" alt />
        <div class="detail">
            <p>{{ item.title }}</p>
            <p>{{ item.price }}</p>
            <btn-count :item="item" :index="index"/>
        </div>
    </div>
</template>

<script>
import BtnCount from "./BtnCount";
export default {
    props: ["item", "index"],
    components: {
        BtnCount
    }
};
</script>

<style lang="scss" scoped>
.list-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 150px;
    .detail {
        width: 100px;
    }
}
</style>