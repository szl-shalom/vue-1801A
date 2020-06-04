<template>
    <div>
        <!-- <template v-if="item.count>=1"> -->
        <button @click="red">-</button>
        <span>{{ item.count }}</span>
        <!-- </template> -->

        <button @click="change">+</button>
    </div>
</template>

<script>
export default {
    props: ["item", "index"],
    methods: {
        change() {
            // 调用公共事件add
            this.$bus.$emit("add", this.index);
        },
        red() {
            // 调用公共事件red
            this.$bus.$emit("red", this.index);
        }
    }
};
</script>

<style lang="scss" scoped>
button {
    padding: 6px 12px;
}
</style>