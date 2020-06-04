<template>
    <div class="item">
        {{ item.price }}
        <button>立强</button>
    </div>
</template>

<script>
export default {
    props:["item"]
};
</script>

<style>
.item{
    width:200px;
    float: left;
    border: 1px solid #ccc;
    margin: 20px 0;
    padding:20px;
}
</style>