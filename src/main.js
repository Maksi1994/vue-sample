import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import {HttpHelper} from "./+shared/classes/http-helper";


Vue.use(VueResource);
HttpHelper.setup(Vue);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
