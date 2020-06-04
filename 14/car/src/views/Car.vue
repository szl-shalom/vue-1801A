<template>
    <div>
        <template>
            <el-checkbox v-model="checked">全选</el-checkbox>
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <div>
                        <el-checkbox v-model="item.checked" />
                    </div>
                    <div>
                        <img :src="item.url" alt />
                    </div>
                    <div>
                        <b>{{ item.name }}</b>
                        <el-input-number v-model="item.count" :min="1" :max="10" label="描述文字"></el-input-number>
                    </div>
                </li>
            </ul>
            <el-checkbox v-model="checked" @click="checked=$event.target.checked">全选</el-checkbox>
            总价：{{ allPrice }} --总数量：{{ allCount }}
        </template>
    </div>
</template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        };
    },
    created() {
        this.list = JSON.parse(localStorage.getItem("car")) || [];
    },
    updated() {
        localStorage.setItem("car", JSON.stringify(this.list));
    },
    computed: {
        allPrice() {
            return this.list.reduce(
                (p, n) => (n.checked ? p + n.price * n.count : p),
                0
            );
        },
        allCount() {
            return this.list.reduce((p, n) => (n.checked ? p + n.count : p), 0);
        },
        checked: {
            set(val) {
                this.list.forEach(item => item.checked = val);
            },
            get() {
                return this.list.every(item => item.checked);
            }
        }
    },
    methods: {}
};
</script>

<style lang="scss">
ul {
    li {
        display: flex;
        padding-left: 50px;
        margin: 20px 0;
    }
}
</style>