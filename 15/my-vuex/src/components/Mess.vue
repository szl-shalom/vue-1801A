<template>
    <div class="mess">
        <input type="text" v-model="mess" />
        <button @click="addToList({title:mess})">提交</button>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            mess: ""
        };
    },
    methods: {
        // submit(){
        //     this.$store.commit("addToList",{
        //         title:this.mess
        //     })
        //     this.mess = "";
        // }
        ...mapMutations(["addToList"])
    },
};
</script>

<style lang="css">
.mess {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
}
</style>