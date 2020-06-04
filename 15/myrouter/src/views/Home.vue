<template>
  <div class="home">
    <!-- 二级路由 -->
    <div class="title">
      <router-link to="/home/register" tag="b">注册</router-link>  |
      <router-link to="/home/login" tag="b">登录</router-link>
    </div>
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
 
}
</script>
