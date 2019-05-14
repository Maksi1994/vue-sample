import Main from "./modules/frontend/main.vue";
import Regist from "./modules/frontend/regist.vue";
import Login from "./modules/frontend/login.vue";
import List from "./modules/backend/articles/list.vue";
import Backend from "./modules/backend/backend.vue";
import Frontend from "./modules/frontend/frontend.vue";
import Profile from "./modules/frontend/profile.vue";
import NotFound from "./+shared/components/not-found.vue";

export const routes = [
    {
        path: "/backend", component: Backend, children: [
        {
            path: "articles",
            component: () => import(/* webpackChunkName: "articles" */ "./modules/backend/articles/articles.vue"),
            children: [
                {
                    path: "list", component: List
                }
            ]
        },
        {
            path: "users",
            component: () => import(/* webpackChunkName: "users" */ "./modules/backend/users/users.vue"),
            children: []
        }
    ]
    },
    {
        path: "", component: Frontend, children: [
        {
            path: "", component: Main
        },
        {
            path: "login", component: Login,
        },
        {
            path: "regist", component: Regist
        },
        {
            path: "profile", component: Profile
        },
        {
            path: "*", component: NotFound
        }
    ],
    },

];
