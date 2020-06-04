<template>
    <div class="list-item">
        <input type="checkbox" v-model="item.flag" />
        <img :src="item.url" alt />
        <div class="content">
            <p>{{ item.title }}</p>
            <p>{{ item.price }}</p>
            <p>
                <button>-</button>
                <span>{{ item.num }}</span>
                <button>+</button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["item"],
    name: "",
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.list-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    .content {
        width: 120px;
    }
}
</style>