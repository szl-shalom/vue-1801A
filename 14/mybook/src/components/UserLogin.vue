<template>
    <div>
        <input type="text" placeholder="账户" v-model="username" />
        <input type="text" placeholder="密码" v-model="password" />
        <button @click="submit">登录</button>
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
        submit() {
            this.$http
                .get(
                    `/api/userLogin?username=${this.username}&password=${this.password}`
                )
                .then(_ => {
                    if (_.data.code) {
                        localStorage.setItem("user", this.username);
                        alert("用户登录成功");
                    } else {
                        localStorage.removeItem("user");
                        alert("用户登录成功");
                    }
                });
        }
    }
};
</script>

<style>
</style>