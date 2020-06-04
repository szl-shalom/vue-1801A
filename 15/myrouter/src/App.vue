<template>
    <div id="app">
        <router-view />

        <div class="footer">
            <router-link tag="b" to="/index">首页</router-link>|
            <router-link tag="b" to="/list">列表页</router-link>|
            <router-link tag="b" to="/home">我的</router-link>
        </div>
    </div>
</template>

<style>
.footer {
    position: fixed;
    bottom: 0;
}

.router-link-exact-active,
.router-link-active {
    color: red;
}
</style>

