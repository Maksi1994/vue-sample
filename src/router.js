import Main from './modules/frontend/main.vue';
import Regist from './+shared/components/regist.vue';
import Login from './+shared/components/login.vue';
import List from './modules/backend/articles/list';
import Backend from './modules/backend/backend.vue';
import Frontend from './modules/frontend/frontend.vue';

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
                path: 'articles', component: () => import(/* webpackChunkName: "articles" */ './modules/backend/articles/articles.vue'), children: [
                    {
                        path: 'list', component: List
                    }
                ]
            },
            {
                path: 'users', component: () => import(/* webpackChunkName: "users" */ './modules/backend/users/users.vue'), children: []
            }
        ]
    },
    {
        path: '/frontend', component: Frontend, children: [
            {
                path: '', component: Main
            }
        ]
    }
];
