export default {
    state: {
        greeter: '',
    },
    actions: {
        setGreeter ({ commit }, text) {
            commit('setGreeter', text);
        },
    },
    mutations: {
        setGreeter (state, text) {
            state.greeter = text;
        },
    },
    getters: {
        greeter: s => s.greeter,
    },
}