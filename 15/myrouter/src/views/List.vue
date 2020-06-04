<template>
    <div class="List">
        <p>请输入标题：</p>
        <el-input v-model="title" placeholder="请输入内容"></el-input>

        <p>请输入内容：</p>
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="content"></el-input>

        <p>请选择日期：</p>
        <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker v-model="date" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
        <el-button type="primary" @click="submit">提交评论</el-button>
        <p>评论列表：</p>
        <el-card class="box-card">
            <div v-for="(item,index) in list" :key="index" class="text item">
                标题： {{item.title}}
                内容： {{item.content}}
                时间： {{item.date}}
            </div>
        </el-card>
    </div>
</template>


<script>
export default {
    data() {
        return {
            title: "",
            content: "",
            date: "",
            list: []
        };
    },
    methods: {
        submit() {
            this.list.push({
                title: this.title,
                date: new Date(this.date).toLocaleDateString(),
                content: this.content
            });
        }
    }
};
</script>

<style>
.text {
    font-size: 14px;
}

.item {
    padding: 18px 0;
}

.box-card {
    width: 100%;
}
</style>