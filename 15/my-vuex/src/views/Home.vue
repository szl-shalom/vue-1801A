<template>
    <div class="home">
        <ul>
            <li v-for="(item,index) in todos" :key="index">
              {{ item.title }} ---- {{ item.done }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        todos() {
            return this.$store.getters.finish;
        }
    }
};
</script>
