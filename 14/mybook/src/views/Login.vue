<template>
    <div>
        <div class="title">
            <router-link to="/login/userLogin">登录</router-link>
            <router-link to="/login/userRegister">注册</router-link>
        </div>
        <!-- 二级路由出口 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style>
.title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
}
</style>