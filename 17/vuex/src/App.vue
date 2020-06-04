<template>
    <div id="app">
        <input type="text" placeholder="请输入姓名" v-model="name" />
        <input type="text" placeholder="请输入年龄" v-model.number="age" />
        <button @click="mAdd">点我添加数据</button>
        <h1>所有的数据</h1>
        <ul>
            <li v-for="(item,index) in todos" :key="index">
                {{ item.name }}---{{ item.age }}
                <b @click="remove(item.id)">X</b>
            </li>
        </ul>
        <h1>年龄大于20岁数据</h1>
        <ul>
            <li v-for="(item,index) in list" :key="index">{{ item.name }}---{{ item.age }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
    created() {
        console.log(this.$store.state.todos);
    },
    computed: {
        ...mapState(["todos"]),
        ...mapGetters(["list"])
    },
    methods: {
        ...mapMutations(["add","del"]),
        mAdd() {
            // 内部逻辑
            this.add({
                name: this.name,
                age: this.age
            });
            // 清空
            this.name = "";
            this.age = "";
        },
        remove(id){
            this.del(id)
        }
    },
    data() {
        return {
            name: "",
            age: ""
        };
    }
};
</script>

<style>
</style>
