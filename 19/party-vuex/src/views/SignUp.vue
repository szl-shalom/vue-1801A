<template>
    <div>
        <ul>
            <li v-for="(item,index) in action.required" :key="index">
                <p>{{ item }}</p>
                <el-input v-model="obj[arrToObj(item)]" :disabled="flag"></el-input>
            </li>
        </ul>
        <el-button @click="add" v-if="!flag">报名</el-button>
    </div>
</template>




<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            obj: {},
            flag: false
        };
    },
    computed: {
        ...mapState(["action", "list"])
    },
    created() {
        // 判断 数据是否存在
        this.flag = !!this.list.find(item => item.id === this.$route.params.id);
        console.log(this.flag)
        if(this.flag){
            this.obj = this.list.find(item => item.id === this.$route.params.id);
        }
    },
    methods: {
        ...mapMutations(["addList"]),
        arrToObj(item) {
            switch (item) {
                case "姓名":
                    return "name";
                case "性别":
                    return "sex";
                case "微信号":
                    return "webchat";
                case "备注":
                    return "tip";
                case "年龄":
                    return "age";
                case "其他":
                    return "other";
                case "手机号":
                    return "tel";
            }
        },
        add() {
            // 非空验证
            if (!this.obj.name || !this.obj.tel) {
                this.$message.error("姓名和手机号是必填项!!!!");
                return;
            }

            // 推入
            this.addList(this.obj);
            this.$router.push("/action");
        }
    }
};
</script>

<style>
ul li {
    list-style: none;
}
</style>