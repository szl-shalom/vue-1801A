<template>
    <div id="app">
        <!-- 路由出口 -->
        <router-view></router-view>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}

html,
body,
#app {
    width: 100%;
    height: 100%;
    overflow: auto;
}
.nav {
    margin: 10px 0 0 10px;
}

.router-link-exact-active,
.router-link-active {
    color: red;
}

.nav{
    height: 60px;
}
</style>
