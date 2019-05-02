<template>
    <h1>THIS IS LIST!</h1>
</template>

<script>
    import Item from "./item.vue";

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
