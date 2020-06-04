<template>
    <div>
        <p>id---{{ this.$route.query.id }}</p>
        <p>
            <img :src="obj.avatar" alt />
            {{ obj.title }}
        </p>
        <p>{{ obj.summary }}</p>

        <button @click="$router.push('/read')">开始阅读</button>
    </div>
</template>

<script>
export default {
    created() {
        let { id } = this.$route.query;
        // 发起请求
        this.$http(`/api/getData?id=${id}`).then(_ => {
            console.log(_);
            this.obj = _.data;
        });
    },
    data() {
        return {
            obj: {}
        };
    }
};
</script>

<style>
</style>