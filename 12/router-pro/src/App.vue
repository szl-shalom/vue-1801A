<template>
    <div id="app">
        <main class="main">
            <!-- 路由出口 -->
            <router-view />
        </main>

        <footer class="footer">
            <!-- 当前显示的路由 会给编译之后的a标签  添加一个类名   router-link-exact-active   -->

            <router-link :to="{path:'/home'}">Home</router-link>
            <!-- <router-link to="/home">Home</router-link> -->

            <router-link to="/about">About</router-link>
        </footer> 
    </div>
</template>

<style lang="scss">
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
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    .main {
        flex: 1;
    }
    .footer {
        height: 46px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        a {
            text-decoration: none;
            color: #000;
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 46px;
            &.router-link-exact-active {
                color: red;
                background: skyblue;
            }
        }
    }
}
</style>
