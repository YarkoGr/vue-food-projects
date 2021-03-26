import { httpService } from "../../http";

const state = () => ({
    theRandomMeal: [],
});
const mutations = {
    changeRandomMeal(state, payload) {
        state.theRandomMeal = {...payload };
    },
};

const actions = {
    fetchRandomMeal: async({ commit }) => {
        try {
            const { meals } = await httpService.getRandomMeal();
            if (meals) {
                commit("changeRandomMeal", meals[0]);
            }
        } catch (error) {
            console.error(error);
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