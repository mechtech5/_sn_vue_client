import Post from '@/api/Post'

const state = {
  collection: [],
  focused: {},
}

const actions = {
  index({commit}) {
    Post.index().then(response => {
      commit('INDEX', response.data);
    })
  },

  show({commit}, id) {
    Post.show(id).then(response => {
      commit('SHOW', response.data);
    })
  },

  store({commit}, data) {
    Post.store(data).then(response => {
      commit('STORE', response.data);
    })
  },

  update({commit}, data) {
    Post.update(data.id, data).then(response => {
      commit('UPDATE', response.data);
    })
  },

  destroy({commit}, id) {
    Post.destroy(id).then(() => {
      commit('DESTROY', id);
    })
  }
}

const mutations = {
  INDEX: (state, payload) => state.collection = payload,
  SHOW: (state, payload) => state.focused = payload,
  STORE: (state, payload) => state.collection.unshift(payload),
  UPDATE: (state, payload) => { 
    let index = state.collection.findIndex((e) => { return e.id === payload.id });
    state.collection.splice(index, 1, payload)
  },
  DESTROY: (state, id) => {
    state.collection = state.collection.filter(u => (u.id !== id))
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}