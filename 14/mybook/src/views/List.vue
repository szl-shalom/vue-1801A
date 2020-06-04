<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <router-link :to="'/detail?id='+item.id">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created() {
        this.$http.get("/api/list").then(_ => {
            this.list = _.data;
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