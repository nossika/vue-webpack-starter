import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      user: '',
    },
    mutations: {
      setUser(state, value) {
        state.user = value;
      }
    },
    actions: {
      setUser({ commit }, value) {
        commit('setUser', value);
      },
    },
    getters: {
      user: s => s.user,
    },
  });
}