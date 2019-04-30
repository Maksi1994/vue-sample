<template>
    <div class="d-flex">
        <item class="cart-item mr-2" v-for="item in items" :item="item" :key="item.id"></item>
    </div>

</template>

<script>
    import Item from "./Item.vue";

    export default {
        name: "",
        props: ["items"],
        components: {
            Item
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .cart-item:nth-child(4n) {
        margin-right: 0;
    }
</style>
