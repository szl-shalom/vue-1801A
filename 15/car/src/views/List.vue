<template>
    <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="100px">
                <slide-bar :list="list" :ind="ind" />
            </el-aside>
            <el-main>
                <list-item :arr="list[ind]"/>
            </el-main>
        </el-container>
        <el-footer>
            <router-link to="/list" tag="b">列表</router-link>
            <router-link to="/car" tag="b">购物车</router-link>
        </el-footer>
    </el-container>
</template>

<script>
import SlideBar from "../components/SlideBar";
import ListItem from "../components/ListItem";

export default {
    created() {
        this.$http.get("/api/list").then(_ => {
            this.list = _.data;
            console.log(this.list);
        });

        this.$bus.$on("change", index => (this.ind = index));
    },
    data() {
        return {
            list: [],
            ind: 0
        };
    },
    components: {
        SlideBar,
        ListItem
    }
};
</script>

<style>

</style>