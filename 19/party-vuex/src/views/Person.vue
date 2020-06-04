<template>
    <div>
        个人详情页
        <p>姓名：{{ obj.name }}</p>
        <p>电话：{{ obj.tel }}</p>
        <p v-if="obj.wechat">微信号：{{ obj.wechat }}</p>
        <p v-if="obj.tip">备注：{{ obj.tip }}</p>
        <p v-if="obj.sex">性别：{{ obj.sex }}</p>
        <p v-if="obj.age">年龄：{{ obj.age }}</p>
    </div>
</template>

<script>
import {mapState } from "vuex";
export default {
    data() {
        return {
            obj: {}
        };
    },
    created() {
        this.obj = this.list.find(item => item.id === this.$route.params.id);
    },
    computed: {
        ...mapState(["list"])
    }
};
</script>

<style>
</style>