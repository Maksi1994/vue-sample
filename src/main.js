import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import {HttpHelper} from "./+shared/classes/http-helper";
import BootstrapVue from "bootstrap-vue";
import {routes} from './router.js';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(VueRouter);

HttpHelper.setup(Vue);

export const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    render: h => h(App),
    router
}).$mount("#app");
