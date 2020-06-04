<template>
    <div id="app">
        <input type="text" v-model.trim="val" @keyup.enter="submit" />
        <h1>已经完成</h1>
        <ul>
            <li v-for="(item,index) in finish" :key="index">
                {{ item.title }}---{{item.flag }}------
                <b @click="remove(item.id)">X</b>
            </li>
        </ul>
        <h1>正在完成</h1>
        <ul>
            <li v-for="(item,index) in process" :key="index">
                {{ item.title }}---{{item.flag }}------
                <b @click="remove(item.id)">X</b>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
    computed: {
        ...mapGetters(["finish", "process"])
    },
    data() {
        return {
            val: ""
        };
    },
    methods: {
        ...mapMutations(["add", "del"]),
        submit() {
            // 调用解构出来的add方法
            this.add({
                title: this.val,
                flag: false
            });
        },
        remove(id) {
          //   // 调用解构出来的del方法
            this.del(id);
        }
    }
};
</script>

<style>
</style>
