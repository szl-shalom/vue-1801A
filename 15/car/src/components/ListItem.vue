<template>
    <div>
        <ul>
            <template v-if="arr">
                <li v-for="(item,index) in arr.spuList" :key="index">
                    <dl>
                        <dd>
                            <img :src="item.littleImageUrl" alt />
                        </dd>
                        <dt>
                            <p>{{ item.spuName }}</p>
                            <el-button
                                type="success"
                                round
                                size="mini"
                                @click="dialogVisible = true;currentObj=item"
                            >加入购物车</el-button>
                        </dt>
                    </dl>
                </li>
            </template>
        </ul>

        <el-dialog title="提示" :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="100" label="描述文字"></el-input-number>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addCar">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props: ["arr"],
    data() {
        return {
            dialogVisible: false,
            num: 1,
            currentObj: {}
        };
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
        addCar() {
            this.dialogVisible = false;
            let car = JSON.parse(localStorage.getItem("car")) || [];
            let index = car.findIndex(
                item => item.spuId === this.currentObj.spuId
            );
            if (index > -1) {
                car[index].count += this.num;
            } else {
                car.push({
                    ...this.currentObj,
                    count: this.num
                });
            }
            localStorage.setItem("car", JSON.stringify(car));
            this.num = 1;
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