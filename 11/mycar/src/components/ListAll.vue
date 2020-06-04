<template>
    <div class="list-all">
        <div>
            全选
            <input type="checkbox" />
        </div>
        <div>
            总价{{allPrice}}
            总数量{{allCount}}
        </div>
    </div>
</template>

<script>
export default {
    props: ["allPrice", "allCount"]
};
</script>

<style lang="scss" scoped>
.list-all {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    height:100%;
}
</style>