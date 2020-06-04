<template>
    <div>
        <div>
            <b>输入内容：</b>
            <input type="text" v-model="mes" />
            <button @click="submit">提交</button>
        </div>

        <div>
            状态
            <span :class="{active:checked}" @click="changeChecked(true)">完成</span>
            <span :class="{active:!checked}" @click="changeChecked(false)">未完成</span>
        </div>
        <hr />
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    computed: {
        ...mapState({
            checked: state => state.checked
        })
    },
    methods: {
        ...mapMutations(["changeChecked", "addData"]),
        submit() {
            this.addData({
                checked: this.checked,
                mes: this.mes
            });
        }
    },
    data() {
        return {
            mes: ""
        };
    }
};
</script>

<style>
.active {
    color: red;
}
</style>