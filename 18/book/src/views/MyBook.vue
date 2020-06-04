<template>
    <div>
        <!-- 登录状态组件 -->
        <is-login></is-login>
        <div class="nav">
            <router-link tag="b" to="/index">首页</router-link>|
            <router-link tag="b" to="/mybook">我的暑假</router-link>
        </div>

        <!-- 表格 -->
        <template>
            <el-table
                ref="multipleTable"
                :data="userList"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column label="书名" width="120">
                    <template slot-scope="scope">{{ scope.row.title }}</template>
                </el-table-column>

                <el-table-column prop="author" label="作者" width="120"></el-table-column>

                <el-table-column prop="address" label="操作" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
                <el-button @click="delSelection">删除选中的项目</el-button>
            </div>
        </template>
    </div>
</template>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    computed: {
        ...mapState(["userList"])
    },
    data() {
        return {
            // 保存选中的数据  element-ui帮你做的
            multipleSelection: []
        };
    },

    methods: {
        ...mapMutations(["del"]),
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        delSelection() {
            //  循环被选中的数据  根据ID一个一个删除
            this.multipleSelection.forEach(item => this.del(item.id));
        }
    },
    created() {
        console.log(this.userList);
    }
};
</script>

<style>
</style>