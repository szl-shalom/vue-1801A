<template>
    <div class="container">
        <header-nav>列表页</header-nav>
        <div class="main">
            <ul class="left">
                <left-item
                    v-for="(item,index) in list"
                    :key="index"
                    :item="item"
                    :isActive="ind===index"
                    :index="index"
                ></left-item>
            </ul>
            <ul class="right">
                <template v-if="list[ind]">
                    <right-item
                        v-for="(item,index) in list[ind].spuList"
                        :key="index"
                        :item="item"
                    />
                </template>
            </ul>
        </div>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
import leftItem from "@/components/leftItem";
import rightItem from "@/components/rightItem";
export default {
    created() {
        this.$http.get("/api/list").then(res => {
            this.list = res.data;
            console.log(this.list);
        });
        this.$bus.$on("changeInd", index => (this.ind = index));
    },
    data() {
        return {
            list: [],
            ind: 0
        };
    },
    components: {
        leftItem,
        rightItem
    }
};
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: auto;
    .left {
        width: 100px;
        border-right: 1px solid #ccc;
    }
    .right {
        flex: 1;
        // background: red;
        overflow: auto;
    }
}
</style>