<template>
    <div id="app">
        <backend></backend>
    </div>
</template>

<script>
    import Backend from './modules/backend/Backend.vue';

    export default {
        name: 'app',
        components: {
            Backend
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
