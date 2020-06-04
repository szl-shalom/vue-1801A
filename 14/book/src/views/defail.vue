<template>
    <div>
        <p>id: {{ obj.id }}</p>
        <p>书名: {{ obj.title }}</p>
        <p>描述: {{ obj.summary}}</p>
        <img :src="obj.avatar" alt />
    </div>
</template>

<script>
export default {
    created() {
        this.$http(`/api/getData?id=${this.$route.query.id}`).then(res => {
            console.log(res.data);
            this.obj = res.data;
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