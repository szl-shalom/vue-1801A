<template>
    <div class="all-price">
        <div>
            全选
            <input type="checkbox" v-model="check" @click="change($event.target.checked)" />
        </div>

        <div>
            <span>总价钱--{{ allPrice }}</span>
            <span>总数量---{{ allCount }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ["allPrice", "allCount", "checkAll"],
    data() {
        return {
            check: false
        };
    },
    created() {
        this.check = this.checkAll
    },
    // 监听改变
    watch: {
        checkAll() {
            this.check = this.checkAll;
        }
    },
    methods: {
        change(type) {
            this.$emit("change", type);
        }
    }
};
</script>

<style lang="scss" scoped>
.all-price {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}
</style>