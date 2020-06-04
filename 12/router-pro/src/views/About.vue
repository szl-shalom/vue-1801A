<template>
    <div class="about">
        about页面 {{$route.params.id}}---{{id}}
        <button @click="goBack">返回上一级</button>
    </div>
</template>

(this.$route)
<script>
export default {
    props: ["id"],
    // created() {
    //     console.log;
    // },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>
