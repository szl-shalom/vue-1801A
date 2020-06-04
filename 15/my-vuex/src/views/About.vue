<template>
    <div class="about">
        <h1>{{ name }}</h1>
        <h1>{{ num1 }}</h1>
        <h1>{{ num2 }}</h1>
        <h1>{{ num3 }}</h1>
        <button @click="add">点我+1</button>
    </div>
</template>


<script>
import { mapState } from "vuex";
export default {
    created() {
        console.log(this.$store.$state);
        console.log(mapState);
    },
    computed: {
        name() {
            return "张三";
        },
        ...mapState({
            num1: state => state.num1,
            num2: state => state.num2,
            num3: state => state.num1 + state.num2
        })
    },
    methods: {
        add() {
            this.$store.commit("increment", 123);
        }
    }
};
</script>