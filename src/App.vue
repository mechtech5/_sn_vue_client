<template>
  <div id="app">
    <button
      type="button"
      class="d-none btn btn-primary"
      ref="authModal"
      data-toggle="modal"
      data-target="#auth-modal">Auth
      Modal</button>

    <div
      id="auth-modal"
      class="modal fade"
      tabindex="-1"
      role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content"> 

          <Login
            v-if="loginMode"
            @toggleAuth="loginMode = !loginMode" />

          <Register
            v-else
            @toggleAuth="loginMode = !loginMode" />

        </div>
      </div>
    </div>

    <Navbar @triggerModal="$refs.authModal.click()" />

    <router-view/>

    <footer class="footer mt-auto py-3">
      <div class="container">
        <span class="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Login from '@/components/Login'
import Register from '@/components/Register'

import Auth from '@/apis/Auth'

export default {
  name: 'app',
  components: {
    Login, Register, Navbar
  },
  data() {
    return {
      loginMode: true,
    }
  },
  mounted() {
    // this.checkAuth();
  },
  methods: {
    checkAuth() {
      if (localStorage.getItem('token')) {
        Auth.me().then(response => {
          this.$store.dispatch('setUser', response.data.user)
        })
      } else {
        // this.$refs.authModal.click()
      }
    },
  }
}
</script>

<style>
  body {
    background-color: #DAE0E6 !important;
  }
</style>
