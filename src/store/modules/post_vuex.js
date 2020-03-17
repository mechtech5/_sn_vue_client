import Post from '../../apis/Post'

const state = {
  collection: [],
  focused: {},
}

const actions = {
  indexAction({commit}) {
    Post.index().then(response => {
      commit('indexMutation', response.data);
    })
  },

  showAction({commit}, id) {
    Post.show(id).then(response => {
      commit('showMutation', response.data);
    })
  },

  storeAction({commit}, data) {
    Post.store(data).then(response => {
      commit('storeMutation', response.data);
    })
  },

  updateAction({commit}, data) {
    Post.update(data.id, data).then(response => {
      commit('updateMutation', response.data);
    })
  },

  destroyAction({commit}, id) {
    Post.destroy(id).then(() => {
      commit('destroyMutation', id);
    })
  }
}

const mutations = {
  indexMutation: (state, payload) => state.collection = payload,
  showMutation: (state, payload) => state.focused = payload,
  storeMutation: (state, payload) => state.collection.unshift(payload),
  updateMutation: (state, payload) => { 
    let index = state.collection.findIndex((e) => { return e.id === payload.id });
    state.collection.splice(index, 1, payload)
  },
  destroyMutation: (state, id) => {
    state.collection = state.collection.filter(u => (u.id !== id))
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}