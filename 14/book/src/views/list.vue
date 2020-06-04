<template>
    <div>
        <router-link
            v-for="(item,index) in list"
            :key="index"
            :to="'/defail?id='+item.id"
        >{{ item.title }}</router-link>
    </div>
</template>

<script>
export default {
    created() {
        this.$http.get("/api/list").then(res => {
            this.list = res.data.bookMallData;
            console.log(this.list);
        });
    },
    data() {
        return {
            list: []
        };
    }
};
</script>

<style>
</style>