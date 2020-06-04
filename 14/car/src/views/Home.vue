<template>
    <div class="home">
        <slide-bar :list="list" :ind="ind"/>
        <list-item :list="list[ind]"/>
    </div>
</template>

<script>
import SlideBar from "@/components/slideBar";
import ListItem from "@/components/listItem"
export default {
    components: {
        SlideBar,
        ListItem
    },
    data() {
        return {
            list: [],
            ind: 0
        };
    },
    created() {
        this.$http.get("/api/list").then(res => {
            this.list = res.data;
            console.log(this.list);
        });

        this.$bus.$on("changeIndex", index => (this.ind = index));
    }
};
</script>

<style lang="scss">
    .home{
        display: flex;
        width:100%;
    }
</style>
