<template>
    <ul>
        <li
            v-for="(item,index) in list"
            :key="index"
            :class="{active:ind===index}"
            @click="$bus.$emit('change',index)"
        >{{ item.categoryName }}</li>
    </ul>
</template>

<script>
export default {
    props: ["list", "ind"]
};
</script>

<style scoped>
ul li {
    line-height: 60px;
    height: 60px;
}
ul li.active {
    color: red;
}
</style>