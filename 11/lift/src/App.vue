<template>
    <div id="app">
        <div class="title">
            <span
                v-for="(item,index) in arr"
                :key="index"
                :class="{active:ind===index}"
                @click="ind=index"
            >{{ index }}---{{item.name}}</span>
        </div>
        <!-- 组件持久化 -->
        <keep-alive>
            <list :obj="arr[ind]" :key="ind" />
        </keep-alive>
    </div>
</template>

<script>
import List from "./components/List";
export default {
    data() {
        return {
            num: 1,
            arr: [
                {
                    name: "张三",
                    age: 18
                },
                {
                    name: "李四",
                    age: 18
                },
                {
                    name: "王五",
                    age: 18
                }
            ],
            ind: 0
        };
    },
    components: {
        List
    }
};
</script>

<style>
.title {
    display: flex;
    justify-content: space-around;
}
span.active {
    color: red;
}
</style>
