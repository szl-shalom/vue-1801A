<template>
    <div id="app">
        <el-container style="height:100%;">
            <el-header>
                <router-link to="/index" tag="b">首页</router-link>
                <router-link to="/login" tag="b">登录</router-link>
                <router-link to="/list" tag="b">列表页</router-link>
                <router-link to="/my" tag="b">我的</router-link>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
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
body {
    width: 100%;
    height: 100%;
}
#app {
    width: 100%;
    height: 100%;
}
.header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
}
.router-link-exact-active,
.router-link-active {
    color: red;
}

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

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
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
</style>
