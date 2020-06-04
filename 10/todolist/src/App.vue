<template>
    <div id="app">
        <div class="header">
            todolist
            <input type="text" v-model="userValue" @keyup.enter="add" />
        </div>
        <h2>
            正在进行
            <span>{{ process.length }}</span>
        </h2>
        <content-list :list="process" :type="false" @del="remove" @change="change" @open="open" />
        <h2>
            已经完成
            <span>{{ finish.length }}</span>
        </h2>
        <content-list :list="finish" @del="remove" @change="change" @open="open" />

        <dialog-content v-if="isFlag" :dialogVal="dialogVal" @submit="submit" />
    </div>
</template>

<script>
import Axios from "axios";
import contentList from "./components/content";
import dialogContent from "./components/dialogContent";
export default {
    created() {
        // 发起请求
        Axios.get("/api/list").then(res => {
            // 修改数据
            this.process = res.data.process;
            this.finish = res.data.finish;
        });
    },
    data() {
        return {
            // 两条数据
            process: [],
            finish: [],
            // input框的值
            userValue: "",
            // 是否渲染dialog组件
            isFlag: false,
            // 弹框的值
            dialogVal: "",
            // 当前操作数据的下标
            ind: -1,
            // 当前操作的数据类型
            type: true
        };
    },
    components: {
        contentList,
        dialogContent
    },
    methods: {
        // 添加数据
        add() {
            this.process.push({
                title: this.userValue
            });
            this.userValue = "";
        },
        remove(index, type) {
            // 判断type是否为真
            // 真  操作的是 finish
            // 假  操作的是 process
            type ? this.finish.splice(index, 1) : this.process.splice(index, 1);

            // this[type ? "finish" : "process"].splice(index, 1);
        },
        change(index, type) {
            type
                ? this.process.push(this.finish.splice(index, 1)[0])
                : this.finish.push(this.process.splice(index, 1)[0]);
        },
        open(index, type) {
            this.isFlag = true;
            // 设置弹框的值
            this.dialogVal = type
                ? this.finish[index].title
                : this.process[index].title;

            //保存状态
            this.ind = index;
            this.type = type;
        },
        submit(val) {
            // 修改数据  判断type操作数组
            this[this.type ? "finish" : "process"][this.ind].title = val;
            this.isFlag = false;
        }
    }
};
</script>

<style>
#app {
    width: 500px;
    margin: auto;
}
</style>
