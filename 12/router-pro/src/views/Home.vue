<template>
    <div class="home">
        HOME
        <button @click="goToAbout">点击调转到about</button>
        <ul>
            <li v-for="(item,index) in 10" :key="index" @click="goToAbout(index)">{{ index}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        goToAbout(index) {
            // $route 代表当前路由的信息
            // console.log(this.$route);
            // $router 代表所有路由信息
            // console.log(this.$router);

            // 跳转到about
            this.$router.push({ path: `/about/${index}` });
        }
    }
};
</script>
