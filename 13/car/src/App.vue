<template>
    <div id="app">
        <!-- 一级路由路由出口 -->
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
#app {
    width: 100%;
    height: 100%;
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        .header {
            height: 46px;
            background: tomato;
        }
        .footer {
            height: 46px;
            background: skyblue;
        }
        .main {
            flex: 1;
            overflow: auto;
        }
    }
}
</style>
