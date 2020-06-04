<template>
    <div class="user-login">
        <div class="login">
            <h1>用户登录</h1>
            <el-input v-model.trim="user.username" placeholder="请输入用户名"></el-input>
            <el-input v-model.trim="user.password" placeholder="请输入密码" type="password"></el-input>
            <el-button type="success" round @click="login">登录</el-button>
            <el-button type="info" round>重置</el-button>
        </div>
        <!-- <el-button :plain="true" @click="open4">错误</el-button> -->
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            user: {
                username: "",
                password: ""
            }
        };
    },
    methods: {
        ...mapActions(["getLogin"]),
        login() {
            if (!this.user.username || !this.user.password) {
                this.open4("账户密码不可以为空");
                return;
            }

            // 发送请求
            this.getLogin(this.user)
                .then(result => {
                    this.$message.success(result + "，三秒跳转到主页");
                    setTimeout(() => {
                        localStorage.setItem("token","admin")
                        this.$router.push("/home");
                    }, 3000);
                })
                .catch(error => {
                    this.$message.error(error);
                });
        },
        open4(title) {
            this.$message.error(title);
        }
    }
};
</script>

<style lang="scss">
.user-login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 30px;
    text-align: center;
    .el-input {
        margin: 10px 0;
    }
    .el-button {
        width: 100%;
        margin: 10px 0;
    }
}
</style>