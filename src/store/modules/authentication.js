import firebase from "firebase/app";

const initialState = () => {
    return { user: null, error: null };
};

const mutations = {
    setUser(state, payload) {
        state.user = payload;
    },
    setError(state, payload) {
        state.error = payload;
    },
};

const actions = {
    signUpAction({ commit }, payload) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then((response) => {
                commit("setUser", response.user);
            })
            .catch((error) => {
                commit("setError", error.message);
            });
    },
};

const getters = {};

export default {
    initialState,
    mutations,
    actions,
    getters,
};