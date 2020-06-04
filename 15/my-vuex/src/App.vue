<template>
    <div id="app">
        <Content :list="list" />
        <Mess />
    </div>
</template>
<script>
import Content from "@/components/Content";
import Mess from "@/components/Mess"
const data = require("@/../mock/data.js");
export default {
    created() {
        this.list = data.data;
        console.log(this.list)
    },
    data() {
        return {
            list: {}
        };
    },
    components:{
      Content,
      Mess
    }
};
</script>
<style>
*{
  margin: 0;
  padding:0;
}
</style>
