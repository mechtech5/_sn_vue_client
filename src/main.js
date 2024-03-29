import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

// Vue.use(Vuelidate)

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
