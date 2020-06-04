<template>
    <div class="dialog">
        <div class="content">
            <textarea name id cols="30" rows="10" v-model="val"></textarea>
            <button @click="submit">提交</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["dialogVal"],
    data() {
        return {
            val: ""
        };
    },
    created() {
        this.val = this.dialogVal;
    },
    methods: {
        submit() {
            this.$emit("submit", this.val);
        }
    }
};
</script>

<style lang="scss" scoped>
.dialog {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    .content {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        background: #fff;
    }
}
</style>