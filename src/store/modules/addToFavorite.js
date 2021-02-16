const state = () => ({
    favorite: [],
});
const mutations = {
    changeFavoriteState: (state, payload) => {
        state.favorite = [...state.favorite, payload];
    },
};

const actions = {
    addMealToFavorite: ({ commit }, payload) => {
        commit("changeFavoriteState", payload);
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