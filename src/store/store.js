import Vue from 'vue';
import Vuex from 'vuex';
import * as axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null
    },
    getters: {
        isAuth: (state) => !!state.user,
        isAdmin: (state) => false
    },
    mutations: {
        loadAppData() {

        }
    }
});
