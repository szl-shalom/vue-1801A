<template>
    <div>
        {{ obj1.name }}----{{ obj1.age }}
        <h1 ref="h1">哈哈哈哈哈</h1>
        {{ num }}
        <button @click="num++">点我+1</button>
    </div>
</template>

<script>
export default {
    props: ["obj"],
    data() {
        return {
            obj1: {},
            num: 1
        };
    },
    // watch: {
    //     // 1对多
    //     obj() {
    //         console.log("obj这个数据改变了！！！！");
    //         this.obj1 = { ...this.obj };
    //     }
    // },

    // computed: {
    //     // 多对1
    //     qwe(){
    //         return this.num +this.num1+tis.num2
    //     }
    // },

    // 生命周期钩子函数
    // 数据初始化之前
    // beforeCreate() {
    //     console.log("list数据初始化");
    // },
    // 数据准备就绪（发起请求）
    created() {
        console.log("list数据准备就绪");
        this.obj1 = { ...this.obj };
    },
    // dom渲染完毕前
    // beforeMount() {
    //     console.log("list-dom挂载前");
    // },
    // // dom挂载完毕
    // mounted() {
    //     // console.log("list-dom挂载完毕");
    //     // this.$refs.h1.style.color = "red";
    // }
    // // 数据改变前
    // beforeUpdate() {
    //     console.log("list-数据准备改变");
    // },
    // // 数据改变之后s
    // updated() {
    //     console.log("list-数据改变了");
    // },
    // 组件销毁前
    // beforeDestroy() {
    //     console.log("组件准备销毁了");
    // },
    // // 组件销毁之后
    // destroyed() {
    //     console.log("组件被销毁了");
    // }

    //
    // activated() {
    //     console.log("我活跃了");
    // },
    // deactivated() {
    //     console.log("我不活跃了");
    // }
};
</script>

<style lang="scss" scoped>
</style>