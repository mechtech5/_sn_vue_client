import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Post from '@/apis/Post'

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET_ALL: (state, payload) => state.posts = payload,
  },
  actions: {
    getAllPosts({commit}) {
      Post.all().then(response => {
        commit('SET_ALL', response.data);
      })
    }
  },
  modules: {
  }
})
