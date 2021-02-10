import Vue from "vue";
import Vuex from "vuex";
import { randomMeal } from "./modules";
import { authentication } from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        randomMeal,
        authentication,
    },
});