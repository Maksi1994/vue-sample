<template>
    <div>
        <frontend-header></frontend-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import FrontendHeader from "../../+shared/components/frontent-header.vue";
    import Login from "./login.vue";
    import Regist from "./regist.vue";
    import Main from "./main.vue";

    export default {
        name: "frontend",
        components: {
            Main,
            Login,
            Regist,
            FrontendHeader
        }
    };
</script>

<style scoped>

</style>
