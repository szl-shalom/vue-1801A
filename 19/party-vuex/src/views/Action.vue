<template>
    <div>
        <h1>{{ action.title }}</h1>
        <p>报名时间：{{ new Date(action.starTime).toLocaleDateString() }}----{{ new Date(action.endTime).toLocaleDateString() }}</p>
        <p>报名人数：{{list.length}}/{{ action.num }}</p>
        <p>发起人：{{ action.person }}</p>
        <el-button @click="$router.push('/signUp/00000000000')">点击去报名</el-button>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>报名人信息：</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="(item,index) in list" :key="index" class="text item" @click="toPerson(item.id)">姓名:{{item.name}}---电话：{{ item.tel }}</div>
        </el-card>

        <!-- <ul>
            <li v-for="(item,index) in list" :key="index">
                报名人{{ item.name }}
                联系方式{{ item.tel }}
            </li>
        </ul>-->
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["action", "list"])
    },
    methods: {
        toPerson(id){
            this.$router.push(`/signUp/${id}`)
        }
    },
};
</script>

<style>
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both;
}

.box-card {
    width: 100%;
}
</style>