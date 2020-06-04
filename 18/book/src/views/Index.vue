<template>
    <div>
        <!-- 登录状态组件 -->
        <is-login></is-login>
        <div class="nav">
            <router-link tag="b" to="/index">首页</router-link>|
            <router-link tag="b" to="/mybook">我的暑假</router-link>
        </div>
        <div class="title">
            <ul>
                <li
                    v-for="(item,index) in list"
                    :key="index"
                    :class="{active:ind===index}"
                    @click="ind=index"
                >{{ item.title }}</li>
            </ul>
        </div>

        <div class="content">
            <template v-if="list[ind]">
                <dl v-for="(item,index) in list[ind].list" :key="index">
                    <dd>
                        <img :src="item.avatar" alt />
                    </dd>
                    <dt>
                        <h2>{{ item.title }}</h2>
                        <!-- <p>{{ item.summary }}</p> -->
                        <el-button type="primary" @click="add(item)" v-if="!isExit(item.id)">加入书架</el-button>
                        <el-button type="success" v-else>已在书架</el-button>
                    </dt>
                </dl>
            </template>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
    methods: {
        ...mapActions(["getList"]),
        ...mapMutations(["addUserList"]),
        // 判断ID存在
        isExit(id) {
            return this.userList.find(item => +item.id === +id);
        },
        add(item) {
            // 验证本地存储是否存在
            if (!localStorage.getItem("token")) {
                this.$router.push("/login");
                return;
            }

            // 推入数据
            this.addUserList(item);
        }
    },
    created() {
        //获取数据
        this.getList();
    },
    computed: {
        ...mapState(["list", "userList"])
    },
    data() {
        return {
            ind: 0 //高亮下表
        };
    }
};
</script>

<style lang="scss">
.title ul {
    display: flex;
    li {
        margin: 20px;
        padding: 20px;
        &.active {
            color: red;
            border-bottom: 1px solid tomato;
        }
    }
}
dl {
    display: flex;
    padding: 20px;
    img {
        width: 122px;
    }
    dt {
        padding-left: 20px;
        p {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
}
</style>