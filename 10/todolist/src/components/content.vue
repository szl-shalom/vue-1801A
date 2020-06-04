<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <input type="checkbox" :checked="type" @click="change(index)" :key="item.title" />
                <span>{{ item.title }}</span>
                <button @click="open(index)">编辑</button>
                <button @click="remove(index)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        // 类型检测
        list: Array,
        type: {
            type: Boolean, //类型检测
            default: true //设置默认值
        }
    },
    methods: {
        remove(index) {
            // 偷工取巧  不建议  因为引用数据类型
            // this.list.splice(index, 1);
            // 建议
            this.$emit("del", index, this.type);
        },
        change(index) {
            this.$emit("change", index, this.type);
        },
        open(index) {
            this.$emit("open", index, this.type);
        }
    }
};
</script>

<style lang="scss" scoped>
button {
    float: right;
}
li {
    line-height: 46px;
}
</style>