<template>
    <el-container>
        <el-header>Header</el-header>
        <el-main>
            <ul>
                <template v-if="car">
                    <li v-for="(item,index) in car" :key="index">
                        <dl>
                            <el-checkbox v-model="item.checked"></el-checkbox>
                            <dd>
                                <img :src="item.littleImageUrl" alt />
                            </dd>
                            <dt>
                                <p>{{ item.spuName }}</p>
                                <el-input-number
                                    v-model="item.count"
                                    @change="handleChange"
                                    :min="1"
                                    :max="100"
                                    label="描述文字"
                                ></el-input-number>
                            </dt>
                        </dl>
                    </li>
                </template>
            </ul>
            <div>
                <el-checkbox v-model="allChecked" @click="allChecked=$event.target.checked">全选</el-checkbox>
                总价格{{allPrice}} ----- 总数量{{allCount}}
            </div>
        </el-main>
        <el-footer>
            <router-link to="/list" tag="b">列表</router-link>
            <router-link to="/car" tag="b">购物车</router-link>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    created() {
        this.car = JSON.parse(localStorage.getItem("car")) || [];
    },
    data() {
        return {
            car: []
        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
        }
    },
    updated() {
        localStorage.setItem("car", JSON.stringify(this.car));
    },
    computed: {
        allPrice() {
            return this.car.reduce(
                (p, n) => (n.checked ? p + n.count * n.currentPrice : p),
                0
            );
        },
        allCount() {
            return this.car.reduce((p, n) => (n.checked ? p + n.count : p), 0);
        },
        allChecked: {
            get() {
                return this.car.every(item => item.checked);
            },
            set(val) {
                this.car.forEach(item => (item.checked = val));
            }
        }
    }
};
</script>

<style>
dl {
    display: flex;
}
dd {
    width: 60px;
    height: 60px;
}
dd img {
    width: 60px;
    height: 60px;
}
dt {
    flex: 1;
}
dt span {
    line-height: 36px;
}
</style>