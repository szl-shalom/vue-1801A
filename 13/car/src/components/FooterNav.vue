<template>
    <div class="footer">
        <router-link to="/about">列表页</router-link>
        <router-link to="/car">购物车</router-link>
        <router-link to="/home">我的</router-link>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
        text-decoration: none;
        color: #fff;
        &.router-link-exact-active {
            color: red;
        }
    }
}
</style>