<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {};
</script>
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
    overflow: auto;
}

.router-link-exact-active,
.router-link-active {
    color: red;
    border-bottom: 1px solid tomato;
}
#nav{
    height:60px;
}
</style>
