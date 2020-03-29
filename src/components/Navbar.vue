<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="container">
      <router-link class="navbar-brand" to='/'>
        Jigsawme
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Left Side Of Navbar -->
          <ul class="navbar-nav mr-auto">

          </ul>

          <!-- Right Side Of Navbar -->
          <ul v-if="logged" class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <div id="navbarDropdown" class="nav-link avatar" data-toggle="dropdown" title="user.profile.username"></div>

              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="#" @click="doLogout">Logout</a>
              </div>
            </li>
          </ul>
          <ul v-else class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">Register</a>
            </li>
          </ul>
      </div>
  </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {

    }
  },
	computed: {
		...mapState('auth_vuex', ['logged', 'user'])
	},
	methods: {
		doLogout() {			
      this.$store.dispatch('auth_vuex/set_auth', false);
      this.$store.dispatch('auth_vuex/set_user', {});
      window.localStorage.clear();
      // this.$toasted.show('Logout Successful', {duration: 2000});
    }
	}
}
</script>

<style scoped>
.avatar {
  height: 28px;
  width: 28px;
  border: 1px solid #000;
  border-radius: 50%;
}
</style>