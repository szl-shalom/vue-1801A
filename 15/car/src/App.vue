<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style>
#app {
    width: 100%;
    height: 100%;
}
* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
}
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-around;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    overflow: auto;
}
.el-container {
    height: 100%;
    overflow: auto;
}
.router-link-exact-active,
.router-link-active {
    color: red;
}
</style>