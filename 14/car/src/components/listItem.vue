<template>
    <div class="list-item">
        <template v-if="list">
            <dl v-for="(item,index) in list.spuList" :key="index">
                <dd>
                    <img :src="item.littleImageUrl" alt />
                </dd>
                <dt>{{ item.spuName }}</dt>
                <el-button
                    type="success"
                    round
                    @click="dialogVisible = true;num=1;currentItem=item"
                >加入购物车</el-button>
            </dl>
        </template>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="save">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props: ["list"],
    data() {
        return {
            dialogVisible: false,
            num: 1,
            currentItem: {}
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
        save() {
            this.dialogVisible = false;
            // 本地存储
            let car = JSON.parse(localStorage.getItem("car")) || [];
            let index = car.findIndex(
                item => item.spuId == this.currentItem.spuId
            );
            if (index < 0) {
                car.push({
                    url: this.currentItem.littleImageUrl,
                    spuId: this.currentItem.spuId,
                    count: this.num,
                    price: this.currentItem.currentPrice,
                    name: this.currentItem.spuName
                });
            } else {
                car[index].count += +this.num;
            }
            localStorage.setItem("car",JSON.stringify(car))
        }
    }
};
</script>

<style>
.list-item {
    flex: 1;
    overflow: auto;
}
img {
    width: 80px;
    height: 80px;
}
</style>