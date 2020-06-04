<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
#app {
    width: 100%;
    height: 100%;
    .container {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        .footer {
            height: 46px;
            background: skyblue;
            display: flex;
            justify-content: space-around;
            align-items: center;
            a {
                color: #fff;
                &.router-link-exact-active {
                    color: red;
                }
            }
        }
        .header {
            height: 46px;
            background: skyblue;
            display: flex;
            justify-content: space-around;
            align-items: center;
            color: #fff;
        }
        .main {
            flex: 1;
        }
    }
}
</style>
