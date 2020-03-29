const state = {
  logged: false,
  user: {}
}

const getters = {
  user: state => state.user,
}

const actions = {
  set_auth({commit}, status) {
    commit('SET_AUTH', status);
  },
  set_user({ commit }, user) {
    commit('SET_USER', user);
  }
}

const mutations = {
  SET_AUTH: (state, payload) => state.logged = payload,
  SET_USER: (state, payload) => state.user = payload,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}