<template>
    <div class="num">
        <template v-if="count">
            <button @click="count--">-</button>
            <span>{{ count }}</span>
        </template>

        <button @click="count++">+</button>
    </div>
</template>

<script>
export default {
    props: ["num", "item"],
    created() {
        this.count = this.num;
    },
    data() {
        return {
            count: 0
        };
    },
    watch: {
        count() {
            // 1、取数据
            let listData = JSON.parse(localStorage.getItem("listData")) || [];
            // 2、验证数据存在
            // true   存在 修改数量
            // false  添加数据
            let index = listData.findIndex(
                item => item.spuId === this.item.spuId
            );
            if (index >= 0) {
                // 本地存储数据存在
                listData[index].count = this.count;
            } else {
                // 本地存储存在
                listData.push({
                    ...this.item,
                    count: this.count
                });
            }
            // 验证当前count的数量 是否删除本地数据
            this.count === 0 && index >= 0 && listData.splice(index, 1);

            // 3 重新存储数据
            localStorage.setItem("listData", JSON.stringify(listData));
            // 触发自定义事件
            this.$bus.$emit("change")
        }
    }
};
</script>

<style lang="scss" scoped>
.num {
    display: flex;
    justify-content: flex-end;
    button {
        width: 40px;
        height: 30px;
    }
    span {
        padding: 0 10px;
    }
}
</style>