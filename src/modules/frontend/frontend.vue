<template>
    <div>
        <frontend-header></frontend-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import FrontendHeader from "../../+shared/components/frontent-header.vue";

    export default {
        name: 'frontend',
        components: {
            FrontendHeader
        }
    }
</script>

<style scoped>

</style>
