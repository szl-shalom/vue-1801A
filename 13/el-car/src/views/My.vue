<template>
    <div class="container">
        <header-nav>我的</header-nav>
        <div class="main">
            <div>
                <div v-if="flag" class="user">
                    欢迎：{{user}}
                    <button @click="quit">退出</button>
                </div>
                <div v-else class="login">
                    请登录
                    <form>
                        <input
                            type="text"
                            placeholder="请输入用户名"
                            name="username"
                            autocomplete
                            v-model="username"
                        />
                        <br />
                        <input
                            type="password"
                            placeholder="请输入密码"
                            name="password"
                            autocomplete
                            v-model="password"
                        />
                        <br />
                        <button type="button" class="login-btn" @click="login">登录</button>
                        <button type="reset">重置</button>
                    </form>
                </div>
            </div>
        </div>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flag: false,
            user: "",
            username: "",
            password: ""
        };
    },
    created() {
        this.user = localStorage.getItem("user");
        this.flag = this.user ? true : false;
    },
    methods: {
        login() {
            this.$http
                .post("/api/user/login", {
                    username: this.username,
                    password: this.password
                })
                .then(res => {
                    res = res.data;
                    if (res.code) {
                        localStorage.setItem("user", res.token);
                        this.user = res.token;
                        this.flag = true;
                    } else {
                        alert(res.errorInfo);
                        this.flag = false;
                    }
                });
        },
        quit() {
            this.user = "";
            localStorage.removeItem("user");
            this.flag = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    form {
        width: 100%;
        input {
            width: 100%;
            height: 40px;
            margin: 10px 0;
        }
        button {
            width: 100%;
            height: 40px;
            margin: 10px 0;
            border: 0px;
            border-radius: 25px;
            outline: none;
            &.login-btn {
                background: tomato;
                color: #fff;
            }
        }
    }
}
</style>