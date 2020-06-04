<template>
    <div class="home">
        <is-login></is-login>
        <div id="nav">
            <router-link to="/home" tag="b">书城</router-link>|
            <router-link to="/about" tag="b">我的</router-link>
        </div>
        <div class="title">
            <b
                v-for="(item,index) in list"
                :key="index"
                :class="{active:ind===index}"
                @click="$store.state.ind = index"
            >{{ item.title }}</b>
        </div>
        <div class="content">
            <template v-if="list[ind]">
                <dl v-for="(item,index) in list[ind].list" :key="index">
                    <dd>
                        <img :src="item.avatar" alt />
                    </dd>
                    <dt>
                        <p>
                            <b>{{ item.title }}</b>
                        </p>
                        <p class="desc">{{ item.summary }}</p>
                        <div class="button">
                            <el-button type="danger" v-if="!isExit(item.id)" @click="addBook(item)">加入书架</el-button>
                            <el-button type="primary" v-else>已在书架</el-button>
                        </div>
                    </dt>
                </dl>
            </template>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
    computed: {
        ...mapState(["list", "ind", "userList"])
    },
    methods: {
        ...mapActions(["getData"]),
        ...mapMutations(["addUserList"]),
        isExit(id) {
            return this.userList.find(item => +item.id === +id);
        },
        addBook(item) {
            if (!localStorage.getItem("token")) {
                this.$router.push("/login");
                return;
            }
            this.addUserList(item);
        }
    },
    mounted() {
        this.getData();
        console.log(this.list);
    }
};
</script>

<style lang="scss">
.title {
    margin: 20px 0;
    b {
        padding: 20px;
        &.active {
            color: red;
        }
    }
}
dl {
    display: flex;
    margin: 20px;
    padding: 20px;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    dd {
        img {
            width: 122px;
        }
    }
    dt {
        padding-left: 10px;
        .el-button {
            margin: 6px 0;
        }
        .desc {
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            box-orient: ver;
        }
    }
}
</style>

