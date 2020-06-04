<template>
    <div class="container">
        <header-nav>About</header-nav>
        <div class="main">
            <div class="left">
                <ul>
                    <li
                        v-for="(item,index) in list"
                        :key="index"
                        :class="{active:ind===index}"
                        @click="ind=index"
                    >{{ item.categoryName }}</li>
                </ul>
            </div>
            <div class="right">
                <template v-if="list[ind]">
                    <!--循环商品组件 -->
                    <list-item v-for="(item,index) in list[ind].spuList" :key="index" :item="item" />
                </template>
            </div>
        </div>
        <footer-nav />
    </div>
</template>
<script>
import ListItem from "@/components/ListItem";
export default {
    created() {
        // 访问数据
        this.$http.get("/api/list").then(res => {
            // 挂载数据
            this.list = res.data;
            console.log(this.list);
        });
    },
    data() {
        return {
            list: [],
            ind: 0 //默认高亮下标
        };
    },
    components: {
        ListItem
    }
};
</script>

<style lang="scss">
.main {
    display: flex;
    overflow: auto;
    .left {
        width: 120px;

        border-right: 1px solid #ccc;
        ul {
            li {
                line-height: 46px;
                font-size: 14px;
                padding-left: 20px;
                &.active {
                    color: red;

                    border-left: 2px solid red;
                }
            }
        }

        // background: red;
    }
    .right {
        flex: 1;
        // background: green;
        overflow: auto;
    }
}
</style>
