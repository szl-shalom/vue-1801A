<template>
    <div class="num">
        <template v-if="count">
            <button @click.stop="count--">-</button>
            <span>{{ count }}</span>
        </template>

        <button @click.stop="count++">+</button>
    </div>
</template>

<script>
export default {
    props: ["num", "spuId", "item"],
    created() {
        this.count = this.num;
    },
    data() {
        return {
            count: 0
        };
    },
    watch: {
        count() {
            let userCar = JSON.parse(localStorage.getItem("user-car")) || [];
            let index = userCar.findIndex(item => item.spuId === this.spuId);

            if (index > -1) {
                userCar[index].count = this.count;
            } else {
                userCar.push({
                    ...this.item,
                    count: 1
                });
            }

            index > -1 && this.count === 0 && userCar.splice(index, 1);

            localStorage.setItem("user-car", JSON.stringify(userCar));

            this.$bus.$emit("updata")
        }
    }
};
</script>

<style lang="scss" scoped>
.num {
    // flex: 1;
    display: flex;
    justify-content: flex-end;
    button {
        padding: 4px 8px;
    }
    span {
        color: red;
        padding: 0 6px;
    }
}
</style>