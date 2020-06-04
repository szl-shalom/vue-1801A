<template>
    <div class="header">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
</style>