<template>
    <div>
        <div class="haader-nav">
            <router-link :to="'/'">
                <div class="logo">
                    <i class="fas fa-blog pr-3"></i>
                    Blog.com
                </div>
            </router-link>

            <router-link  class="d-block ml-auto" :to="'/login'">
                <b-button class="px-4"  variant="outline-primary">Sing in</b-button>
            </router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: "regist"
    }
</script>

<style scoped>

</style>
