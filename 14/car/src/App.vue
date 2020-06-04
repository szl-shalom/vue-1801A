<template>
    <div id="app">
        <router-view />
        <div class="footer">
            <router-link tag="b" to="/home">首页</router-link>|
            <router-link tag="b" to="/car">购物车</router-link>|
            <router-link tag="b" to="/my">我的</router-link>
        </div>
    </div>
</template>

<style>
.footer {
    position: fixed;
    bottom: 0;
}

.router-link-exact-active {
    color: red;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
