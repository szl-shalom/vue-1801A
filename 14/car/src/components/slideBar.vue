<template>
    <div class="slideBar">
        <ul v-if="list">
            <li
                v-for="(item,index) in list"
                :key="index"
                @click="$bus.$emit('changeIndex',index);"
                :class="{active:ind===index}"
            >{{ item.categoryName }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["list","ind"]
};
</script>

<style lang="scss" scoped>
.slideBar {
    width: 100px;
    ul {
        width:100%;
        li {
            line-height: 46px;
            padding-left:20px;
              border-left: 2px solid #fff;
            &.active {
                color: red;
                border-left: 2px solid red;
            }
            list-style: none;
        }
    }
}
</style>