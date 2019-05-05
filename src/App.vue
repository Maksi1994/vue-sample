<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import Backend from "./modules/backend/backend.vue";
    import Login from './+shared/components/login.vue';
    import Regist from './+shared/components/regist.vue';
    import Main from './modules/frontend/main.vue';
    import Frontend from './modules/frontend/frontend.vue';

    export default {
        name: "app",
        components: {
            Backend,
            Main,
            Login,
            Regist,
            Frontend
        }
    };


</script>

<style>
    @import '../node_modules/bootstrap/dist/css/bootstrap.css';
    @import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
    @import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
    @import './+shared/styles/style.css';

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .content {
        padding-left: 30px;
        padding-right: 30px;
        margin-top: 50px;
    }
</style>
