<template>
    <div class="about">
        <el-container>
            <el-header>购物车页面</el-header>
            <el-container>
                <el-main>
                    <div class="list">
                        <dl v-for="(item,index) in list" :key="index">
                            <el-checkbox v-model="item.checked"></el-checkbox>
                            <dd>
                                <img :src="item.littleImageUrl" alt />
                            </dd>
                            <dt>
                                <p>{{ item.spuName }}</p>
                                <p>单价：{{ item.currentPrice }}</p>
                                <p>
                                    <el-input-number
                                        v-model="item.num"
                                        @change="handleChange"
                                        :min="1"
                                        :max="10"
                                        label="描述文字"
                                    ></el-input-number>
                                </p>
                            </dt>
                        </dl>
                    </div>
                    <p>
                        <el-checkbox
                            v-model="allChecked"
                            @click="allChecked=$event.target.checked"
                        >全选</el-checkbox>
                        总数量 ： {{ allCount }}
                        总价钱 ： {{ allPrice }}
                    </p>
                </el-main>
            </el-container>
            <el-footer>
                <router-link to="/home" tag="b">列表</router-link>
                <router-link to="/about" tag="b">购物车</router-link>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        };
    },
    // 数据准备
    created() {
        this.list = JSON.parse(localStorage.getItem("car")) || [];
        console.log(this.list);
    },
    methods: {
        handleChange(value) {
            // console.log(value);
        }
    },
    // 监听数据完成
    updated() {
        // 重新存储
        localStorage.setItem("car", JSON.stringify(this.list));
    },
    computed: {
        // 反选
        allChecked: {
            set(val) {
                // 修改依赖的值
                this.list.forEach(item => (item.checked = val));
            },
            get() {
                // 根据依赖返回值
                return this.list.every(item => item.checked);
            }
        },
        // 总数量
        allCount() {
            return this.list.reduce(function(p, n) {
                console.log(n)
                return n.checked ? p + n.num : p;
            }, 0);
        },
        // 总价钱
        allPrice() {
            return this.list.reduce(function(p, n) {
                return n.checked ? p + n.num * n.currentPrice : p;
            }, 0);
        }
    }
};
</script>
<style>
.about {
    height: 100%;
}
.el-container {
    height: 100%;
}
</style>
