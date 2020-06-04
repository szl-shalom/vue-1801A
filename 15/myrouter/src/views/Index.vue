<template>
    <div class="Index">
        <div class="title">
            <span
                v-for="(item,index) in arr"
                :key="index"
                :class="{active:ind===index}"
                @click="ind=index"
            >{{ item.name }}</span>
        </div>
        <div class="content">
          <!-- {{ arr[ind].children.join("||") }} -->
          <ul>
            <li v-for="(item,index) in arr[ind].children" :key="index">{{ item }}</li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: [
                {
                    name: "西游记",
                    children: ["唐僧", "孙悟空"]
                },
                {
                    name: "红楼梦",
                    children: ["贾宝玉", "林黛玉"]
                },
                {
                    name: "水浒传",
                    children: ["林聪", "李逵"]
                },
                {
                    name: "三国演义",
                    children: ["关云长", "刘备", "张飞"]
                }
            ],
            ind: 0
        };
    }
};
</script>

<style lang="css">
.active {
    color: red;
}
span{
  padding:0 10px;
}
</style>
