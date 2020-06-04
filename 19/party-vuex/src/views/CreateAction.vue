<template>
    <div>
        <h1>创建活动页面</h1>
        <p>活动发起人</p>
        <el-input v-model="opt.person" placeholder="请输入内容"></el-input>
        <p>标题</p>
        <el-input v-model="opt.title" placeholder="请输入内容"></el-input>
        <p>活动描述</p>
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="opt.desc"></el-input>
        <p>开始时间</p>
        <el-date-picker v-model="opt.starTime" type="date" placeholder="选择日期"></el-date-picker>
        <p>结束时间</p>
        <el-date-picker v-model="opt.endTime" type="date" placeholder="选择日期"></el-date-picker>
        <p>活动人数</p>
        <el-input v-model="opt.num" placeholder="请输入内容"></el-input>
        <p>要求</p>
        <el-checkbox-group v-model="opt.required">
            <el-checkbox label="姓名"></el-checkbox>
            <el-checkbox label="性别"></el-checkbox>
            <el-checkbox label="年龄"></el-checkbox>
            <el-checkbox label="微信号"></el-checkbox>
            <el-checkbox label="手机号"></el-checkbox>
            <el-checkbox label="备注"></el-checkbox>
            <el-checkbox label="其他"></el-checkbox>
        </el-checkbox-group>
        <p>已选择</p>
        <div>
            <el-tag type="success" v-for="(item,index) in opt.required" :key="index">{{ item }}</el-tag>
        </div>
        <el-button type="primary" @click="submit(opt)">提交</el-button>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            opt: {
                person: "",
                title: "",
                starTime: "",
                endTime: "",
                desc: "",
                required: [],
                num: ""
            }
        };
    },
    methods: {
        ...mapMutations(["setAction"]),
        submit() {
            // 验证非空
            if (!this.opt.person || !this.opt.title || !this.opt.desc) {
                this.$message.error("不可以为空");
                return;
            }

            // 验证结束日期大约开始日期
            if (this.opt.endTime - this.opt.starTime < 0) {
                this.$message.error("结束时间必须大于考试时间");
                return;
            }
            // 修改
            this.setAction(this.opt);
            this.$router.push("/action");
        },
       
    }
};
</script>

<style>
</style>