import VueRouter from 'vue-router';
import Main from './modules/frontend/main.vue';
import Frontend from './modules/frontend/frontend.vue';
import Backend from './modules/backend/backend.vue';
import Articles from './modules/backend/articles/articles.vue';
import Users from './modules/backend/users/users.vue';
import Regist from './+shared/components/regist.vue';
import Login from './+shared/components/login.vue';
import List from './modules/backend/articles/list';

export const routes = [
    {
        path: '/login', component: Login,
    },
    {
        path: '/regist', component: Regist
    },
    {
        path: '/backend', component: Backend, children: [
            {
                path: 'articles', component: Articles, children: [
                    {
                        path: 'list', component: List
                    }
                ]
            },
            {
                path: 'users', component: Users, children: []
            }
            ]
    },
    {
        path: '', component: Frontend, children: [
            {
                path: '', component: Main
            }
        ]
    }
];
