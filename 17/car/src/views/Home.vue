<template>
    <div class="home">
        <el-container>
            <el-header>列表页</el-header>
            <el-container>
                <el-aside width="100px">
                    <ul>
                        <li
                            v-for="(item,index) in list"
                            :key="index"
                            :class="{active:ind==index}"
                            @click="ind=index"
                        >{{ item.categoryName }}</li>
                    </ul>
                </el-aside>
                <el-main>
                    <template v-if="list[ind]">
                        <dl v-for="(item,index) in list[ind].spuList" :key="index">
                            <dd>
                                <img :src="item.littleImageUrl" alt />
                            </dd>
                            <dt>
                                <p>{{ item.spuName }}</p>
                                <p>{{ item.currentPrice }}</p>
                                <!-- 按钮 -->
                                <el-button
                                    type="danger"
                                    @click="dialogVisible=true;currItem=item"
                                >加入购物车</el-button>
                            </dt>
                        </dl>
                    </template>
                </el-main>
            </el-container>
            <el-footer>
                <router-link to="/home" tag="b">列表</router-link>
                <router-link to="/about" tag="b">购物车</router-link>
            </el-footer>
        </el-container>

        <!-- 弹框 -->
        <el-dialog title="提示" :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
            <!-- 数量 -->
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="add">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            ind: 0,
            dialogVisible: false,
            num: 1,
            currItem: {}
        };
    },
    created() {
        this.$http.get("/api/list").then(res => {
            this.list = res.data;
            console.log(this.list);
        });
    },
    methods: {
        handleClose(done) {
            this.$confirm("确认关闭？")
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        },
        handleChange(value) {
            console.log(value);
        },
        add() {
            // 进行本地存储
            let car = JSON.parse(localStorage.getItem("car")) || [];
            // 从本地存储寻找ID  找到返回id所在的下表   没有找到返回-1
            let index = car.findIndex(item => item.spuId === this.currItem.spuId);
            // 大于-1 找到数据  
            if (index > -1) {
                car[index].num += this.num;
            } else {
                car.push({
                    ...this.currItem,
                    num: this.num
                });
            }
            localStorage.setItem("car", JSON.stringify(car));
            this.dialogVisible = false;
        }
    }
};
</script>

<style>
.home {
    width: 100%;
    height: 100%;
    overflow: auto;
}
.el-container {
    height: 100%;
}
ul li {
    line-height: 46px;
}
.active {
    color: red;
}

dl {
    display: flex;
    margin: 10px 0;
}
dl dd {
    width: 100px;
    height: 100px;
}
dl dd img {
    height: 100%;
    width: 100%;
}
dl dt {
    flex: 1;
    padding-left: 10px;
}
</style>
