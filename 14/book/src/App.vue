<template>
    <div id="app">
        <div class="header">
            <routerLink to="/index">首页</routerLink>
            <routerLink to="/login">登录</routerLink>
            <routerLink to="/list">列表</routerLink>
            <routerLink to="/my">我的</routerLink>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
    display: flex;
    line-height: 46px;
    justify-content: space-around;
    align-items: center;
}

a {
    text-decoration: none;
    color: #000;
    margin: 0 20px;
    &.router-link-exact-active {
        color: red;
    }
}

* {
    margin: 0;
    padding: 0;
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
</style>
