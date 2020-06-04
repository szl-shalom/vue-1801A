<template>
    <div class="container">
        <header-nav>Home</header-nav>
        <div class="main">
            <div v-if="flag">
                {{ user}}
                <button @click="quit">退出</button>
            </div>
            <div class="login" v-else>
                <form>
                    用户登录
                    <input type="text" placeholder="请输入用户名" v-model="username" autocomplete />
                    <input type="password" placeholder="请输入密码" v-model="password" autocomplete />
                    <button @click="login" type="button">登录</button>
                    <button type="reset">重置</button>
                </form>
            </div>
        </div>
        <footer-nav />
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            this.$http
                .post("/api/user/login", {
                    username: this.username,
                    password: this.password
                })
                .then(res => {
                    if (res.data.code) {
                        this.user = res.data.username;
                        localStorage.setItem("user", res.data.username);
                        this.flag = true;
                    } else {
                        alert(res.data.errorInfo);
                        this.flag = false;
                    }
                });
        },
        quit() {
            this.user = "";
            this.flag = false;
            localStorage.removeItem("user");
        }
    },
    data() {
        return {
            username: "",
            password: "",
            use: "",
            flag: true
        };
    },
    created() {
        this.user = localStorage.getItem("user");
        this.flag = this.user ? true : false;
    }
};
</script>

<style lang="scss">
.login {
    display: flex;
    flex-direction: column;
    padding: 20px;
    input,
    button {
        width: 100%;
        height: 46px;
        margin: 10px 0;
    }
}
</style>
