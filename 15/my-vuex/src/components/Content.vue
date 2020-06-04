<template>
    <div>
        <!-- <h1>{{ list.title }}</h1>
        <p>
            <img :src="list.media_user.avatar_url" alt="" width=20>
            <b>{{ list.source }}</b>
            <b>{{ list.comment_count }}条评论</b>
        </p>
        <div class="content" v-html="list.content"></div>-->
        <ul>
            <li v-for="(item,index) in list" :key="index">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState({
            list: state => state.list
        })
    }
};
</script>

<style>
</style>