import _ from "lodash";
const state = () => ({
    favorite: [],
});
const mutations = {
    changeFavoriteState: (state, payload) => {
        state.favorite = [...state.favorite, payload];
    },
    removeFavoriteState: (state) => {
        state.favorite = [];
    },
};

const actions = {
    addMealToFavorite: ({ commit, state }, payload) => {
        const isAdded = _.findIndex(state.favorite, ["idMeal", payload.idMeal]);

        if (isAdded === -1) {
            commit("changeFavoriteState", payload);
        } else {
            alert("This meal is added to your list");
        }
    },
    removeMealFromFavorite: ({ commit }) => {
        commit("removeFavoriteState");
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