<template>
    <div>
        <item v-for="item in items" :item="item" :key="item.id"></item>
    </div>

</template>

<script>
    import Item from './Item.vue';

    export default {
        name: '',
        props: ['items'],
        components: {
            Item
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
