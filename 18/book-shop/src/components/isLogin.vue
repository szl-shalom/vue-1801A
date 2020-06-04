<template>
    <div class="is-login">
        <div v-if="username">
            欢迎用户：{{username}}
            <el-button type="danger" @click="quit">退出</el-button>
        </div>
        <div v-else>
            <el-button type="primary" @click="$router.push('/login')">登录</el-button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    computed: {
        ...mapState(["username"])
    },
    methods: {
        ...mapMutations(["quit"])
    }
};
</script>

<style lang="scss">
.is-login {
    position: fixed;
    top: 0;
    right: 0;
}
</style>