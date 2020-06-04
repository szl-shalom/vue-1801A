<template>
    <div id="app">
        <!-- 跳转路由   router-link[to="路由的路径"] -->
        <router-link to="/list">列表页</router-link>
        <router-link to="/search">搜索页</router-link>
        <router-link to="/">我的</router-link>

        <!-- 路由出口  router-view -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
