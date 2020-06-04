<template>
    <div class="home">
        <input type="text" placeholder="请输入账户" v-model.trim="username" />
        <input type="text" placeholder="请输入密码" v-model.trim="password" />
        <button @click="login">登录</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        login() {
            if (!this.username || !this.password) {
                alert("不可以为空");
            }
            if (this.username === "admin" && this.password === "123") {
                // 存储标识
                localStorage.setItem("user", this.username);
                // 跳转页面
                this.$router.push('/index')
            } else {
                alert("账户密码不正确");
            }
        }
    }
};
</script>
