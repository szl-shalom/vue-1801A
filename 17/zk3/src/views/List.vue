<template>
    <div>
        <!-- Tab切换 -->
        <div class="tab">
            <div class="left">
                <div
                    v-for="(item,index) in list"
                    :key="index"
                    :class="{active:ind===index}"
                    @click="ind=index"
                >{{item.name }}</div>
            </div>
            <div class="right">
                <div>
                    <span
                        v-for="(item,index) in list[ind].children"
                        :key="index"
                        :class="{active:childrenInd===index}"
                        @click="childrenInd=index"
                    >{{ item }} ||</span>
                </div>
                <!-- 饿了吗组件库 -->
                <div class="block">
                    <span class="demonstration">默认</span>
                    <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
                </div>
            </div>
        </div>

        <!-- 展示10条数据 -->
        <button @click="$store.commit('add')">点击查看更多</button>
        <button @click="$store.commit('slideUp')">点击收起</button>
        <div class="list"> 
            <Item v-for="(item,index) in arr" :key="index" :item="item"/>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Item from "@/components/Item";
export default {
    computed: {
        ...mapState(["list", "arr"])
    },
    data() {
        return {
            ind: 0,
            childrenInd: 0,
            value1: ""
        };
    },
    components: {
        Item
    }
};
</script>

<style lang="css">
.tab {
    display: flex;
}
.left {
    width: 80px;
}
.right {
    flex: 1;
}
.active {
    color: red;
}

.list {
    width:800px;
}
</style>