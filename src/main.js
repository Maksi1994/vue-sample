import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import {HttpHelper} from "./+shared/classes/http-helper";
import BootstrapVue from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(BootstrapVue);

HttpHelper.setup(Vue);

new Vue({
    render: h => h(App),
}).$mount("#app");
