<template>
    <div class="about">
        <is-login></is-login>
        <div id="nav">
            <router-link to="/home" tag="b">书城</router-link>|
            <router-link to="/about" tag="b">我的</router-link>
        </div>

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
            <el-table-column label="操作" show-overflow-tooltip>
                <template slot-scope="scope">
                    <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
                </template>

                <!-- <template slot-scope="scope">{{ scope.row.id }}</template> -->
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection(userList)">切换第二、第三行的选中状态</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
    </div>
</template>


<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            multipleSelection: []
        };
    },
    computed: {
        ...mapState(["userList"])
    },
    methods: {
        ...mapMutations(["del"]),

        toggleSelection(rows) {
            // console.log(rows);
            console.log(this.$refs.multipleTable);
            console.log(this.$refs.multipleTable.store.states.selection);
            // if (rows) {
            //     rows.forEach(row => {
            //         console.log(this.$refs.multipleTable)
            //         // this.$refs.multipleTable.toggleRowSelection(row);
            //     });
            // }
            // else {
            //     this.$refs.multipleTable.clearSelection();
            // }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log( this.multipleSelection)
        }
    }
};
</script>
