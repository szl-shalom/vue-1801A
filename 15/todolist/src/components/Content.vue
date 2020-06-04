<template>
    <ul>
        <li v-for="item in list" :key="item.id">
            <input type="checkbox" v-model="item.checked" />
            <b>{{ item.mes }}</b>
            <span @click="remove(item.id)">X</span>
        </li>
    </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["list"])
    },
    methods: {
        remove(id) {
            this.$store.commit("remove", id);
        }
    }
};
</script>

<style>
</style>