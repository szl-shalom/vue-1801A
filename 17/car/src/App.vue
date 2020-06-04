<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style>
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.el-container {
    overflow: auto;
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

body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
html,
body,
#app {
    width: 100%;
    height: 100%;
}

.router-link-exact-active,
.router-link-active {
    color: red;
}
</style>
