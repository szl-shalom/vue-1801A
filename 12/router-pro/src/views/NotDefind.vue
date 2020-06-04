<template>
    <div>404 找不到该页面 {{ $route.path }}</div>
</template>

<script>
export default {
    name: "",
    data() {
        return {};
    },
    created() {
        // 可以在 $route查看当前路由信息
        console.log(this.$route);
    }
};
</script>

<style lang="scss" scoped>
</style>