import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import BootstrapVue from "bootstrap-vue";
import {routes} from './router.js';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import store from './store/store';
import Vuex from 'vuex';
import environment from "../.env/environment";
import * as axios from 'axios';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(Vuex);

axios.defaults.beseURL = environment.API_URL;

export const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    render: h => h(App),
    store,
    router
}).$mount("#app");
