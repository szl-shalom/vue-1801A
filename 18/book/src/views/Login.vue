<template>
    <div class="login">
        <div>
            <h1>用户登录</h1>
            <form>
                <el-input v-model="username" placeholder="请输入用户名"></el-input>
                <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
            </form>

            <el-button type="primary" round @click="login">登录</el-button>
            <el-button type="info" round @click="reset">重置</el-button>
        </div>
    </div>
</template>

<script>
import Axios from "axios";
export default {
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        login() {
            // 非空验证
            if (!this.username || !this.password) {
                this.$message.error("账户密码不可以为空");
                return;
            }

            // 发起请求
            Axios.post("/api/user/login", {
                username: this.username,
                password: this.password
            }).then(res => {
                if (res.data.code) {
                    // 调用elemnt-ui 弹框
                    this.$message.success(res.data.mess + ",三秒进入主页");
                    // 本地存储
                    localStorage.setItem("token", res.data.token);
                    // 进入主页
                    setTimeout(() => {
                        this.$router.push("/index");
                    }, 3000);
                } else {
                    this.$message.error(res.data.mess);
                }
            });
        },
        reset() {
            this.username = "";
            this.password = "";
        }
    }
};
</script>

<style lang="scss">
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    padding: 20px;
    .el-input {
        margin: 10px 0;
    }
    .el-button {
        width: 100%;
        margin: 10px 0;
    }
}
</style>