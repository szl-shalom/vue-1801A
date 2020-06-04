<template>
    <li class="left-item" :class="{active:isActive}" @click="$bus.$emit('changeInd',index)">
        {{ item.categoryName }}
        <img :src="item.iconUrl" v-if="item.iconUrl" />
    </li>
</template>

<script>
export default {
    props: ["item", "isActive", "index"]
};
</script>

<style lang="scss" scoped>
li {
    padding-left: 10px;
    display: flex;
    justify-content: flex-start;
    height: 46px;
    align-items: center;
    font-size: 14px;
    border-left: 2px solid #fff;
    margin: 10px 0;
    &.active {
        color: red;
        border-left: 2px solid red;
    }
    img {
        width: 20px;
    }
}
</style>