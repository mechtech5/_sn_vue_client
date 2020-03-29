import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import auth_vuex from './modules/auth'
import post_vuex from './modules/post'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth_vuex, post_vuex
  }
})
