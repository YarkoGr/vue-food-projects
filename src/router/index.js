import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { routesPath, routesNames } from "./routes";

const Blog = () =>
    import ( /* webpackChunkName: "blog" */ "../views/Blog.vue");
const Country = () =>
    import ( /* webpackChunkName: "country" */ "../views/Country.vue");
const Meals = () =>
    import ( /* webpackChunkName: "meals" */ "../views/Meals.vue");
const CountryMealsList = () =>
    import (
        /* webpackChunkName: "countryMealsList" */
        "../views/CountryMealsList.vue"
    );
const MealRecipe = () =>
    import (
        /* webpackChunkName: "mealRecipe" */
        "../views/MealRecipe.vue"
    );
const Categories = () =>
    import ( /* webpackChunkName: "categories" */ "../views/Categories.vue");

const CategoriesMeals = () =>
    import ( /* webpackChunkName: "categoryMeals" */ "../views/CategoryMeals.vue");

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
    {
        name: routesNames.country,
        path: routesPath.country,
        component: Country,
    },
    {
        name: routesNames.meals,
        path: routesPath.meals,
        component: Meals,
    },
    {
        name: routesNames.countryMealsList,
        path: routesPath.countryMealsList,
        component: CountryMealsList,
    },
    {
        name: routesNames.categories,
        path: routesPath.categories,
        component: Categories,
    },
    {
        name: routesNames.mealRecipe,
        path: routesPath.mealRecipe,
        component: MealRecipe,
    },
    {
        name: routesNames.categoryMeals,
        path: routesPath.categoryMeals,
        component: CategoriesMeals,
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