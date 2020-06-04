<template>
    <div id="app">
        <div id="nav">
            <router-link to="/login">登录</router-link>|
            <router-link to="/index">主页</router-link>
        </div>
        <router-view />
    </div>
</template>

<style>
.router-link-exact-active,
.router-link-active {
    color: red;
}
</style>
