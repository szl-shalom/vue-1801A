<template>
    <div class="is-login">
        <div v-if="token">
            当前用户：{{ token }}
            <el-button round @click="quit">退出登录</el-button>
        </div>
        
        <div v-else>
            <el-button round @click="$router.push('/login')">登录</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            token: ""
        };
    },
    created() {
        this.token = localStorage.getItem("token");
    },
    methods: {
        quit() {
            // 清空本地存储
            localStorage.removeItem("token");
            // 清楚当前token
            this.token = "";
        }
    }
};
</script>

<style>
.is-login {
    position: fixed;
    top: 6px;
    right: 6px;
}
</style>