import Vue from "vue";
import Vuex from "vuex";
import {
    randomMeal,
    authentication,
    addToFavorite,
    mealRecipe,
} from "./modules";
// import { authentication } from "./modules";
// import { addToFavorite } from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        randomMeal,
        authentication,
        addToFavorite,
        mealRecipe,
    },
});