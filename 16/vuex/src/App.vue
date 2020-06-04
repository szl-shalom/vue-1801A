<template>
    <div id="app">
        结果：{{ num1 }} + {{ num2}} = {{ result }}
        <button @click="add">点我+1</button>

        <h1>数据</h1>
        <ul>
          <li v-for="(item,index) in finishList" :key="index">{{ item.title }} --- {{ item.done }}</li>
        </ul>
    </div>
</template>


<script>
// mapState函数 就是 state 映射
import { mapState } from "vuex";
// mapMutations函数 就是 mutations的映射
import { mapMutations } from "vuex";
// mapGetters 就是 getters的映射
import { mapGetters } from "vuex";
export default {
    methods: {
        // 通过映射mapMutations 解构出来add方法
        ...mapMutations(["add"])
    },
    computed: {
        // 把数据映射对象解构出来
        ...mapState(["num1", "num2"]),
        result() {
            return this.num1 + this.num2;
        },
        // 将getters 中finishList 解构出来
        ...mapGetters(["finishList"])
    }
    // created() {
    //     console.log(mapState(["num1", "num2"]));
    // }

    // created() {
    //     // 获取vuex 中的数据
    //     console.log(this.$store.state.num1);
    //     console.log(this.$store.state.num2);
    // }
};
</script>


<style>
</style>
