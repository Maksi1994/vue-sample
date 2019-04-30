<template>
    <div id="app">
        <header-nav class="haader-nav"></header-nav>
        <content-wrap class="content"></content-wrap>
    </div>
</template>

<script>
    import ContentWrap from "./modules/backend/Content-Wrap.vue";
    import HeaderNav from "./+shared/components/header-nav.vue";

    export default {
        name: "app",
        components: {
            ContentWrap,
            HeaderNav
        }
    };
</script>

<style>
    @import '../node_modules/bootstrap/dist/css/bootstrap.css';
    @import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .haader-nav {
        padding-top: 10px;
        display: block;
        margin: 0 auto;
        padding-left: 30px;
        padding-right: 30px;
    }

    .content {
        padding-left: 30px;
        padding-right: 30px;
        margin-top: 50px;
    }
</style>
