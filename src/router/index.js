import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { routesPath, routesNames } from "./routes";

const Blog = () =>
    import ( /* webpackChunkName: "about" */ "../views/Blog");

Vue.use(VueRouter);

const routes = [{
        name: routesNames.home,
        path: routesPath.home,
        component: Home,
    },
    {
        name: routesNames.blog,
        path: routesPath.blog,
        component: Blog,
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;