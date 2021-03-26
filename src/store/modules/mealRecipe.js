import { httpService } from "../../http";

const state = () => ({
    mealFullRecipe: [],
});
const mutations = {
    changeMaleRecipe(state, payload) {
        state.mealFullRecipe = [...payload.mealFullRecipe];
    },
};

const actions = {
    fetchMaleRecipe: async({ commit }, payload) => {
        const result = await httpService.getMealById(payload);

        if (result) {
            commit("changeMaleRecipe", { mealFullRecipe: result.meals });
        }
    },
};

const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};