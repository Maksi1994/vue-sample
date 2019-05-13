<template>
    <div class="haader-nav">
        <router-link :to="'/backend'">
            <div class="logo">
                Blog.com
            </div>
        </router-link>

        <router-link v-if="isAuth" :to="'/profile'">
                <div class="user-line">
                    <span>{{user.first_name}}</span>
                    <span>{{user.last_name}}</span>
                </div>
            </router-link>
    </div>
</template>

<script>
    export default {
        name: "frontent-header",
        computed: {
            isAuth() {
                return this.$store.getters.isAuth;
            },
            user() {
                return this.$store.state.user;
            }
        }
    }
</script>

<style scoped>
    .user-line {

    }
</style>
