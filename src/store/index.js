import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import post_vuex from './modules/post_vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
    user: state => state.user,
  },
  actions: {
    setUser: ({commit}, user) => commit('SET_USER', user)
  },
  mutations: {
    SET_USER: (state, user) => state.user = user
  },
  modules: {
    post_vuex
  }
})
