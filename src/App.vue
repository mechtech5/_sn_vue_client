<template>
  <div id="app">
    <Navbar />
    <main class="py-4">
      <router-view/>
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Auth from '@/api/Auth';

export default {
  name: 'app',
  components: {
    Navbar, Footer
  },
  data() {
    return {
      
    }
  },
  created() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      if (localStorage.getItem('token')) {
        Auth.me().then(response => {
          this.$store.dispatch('auth_vuex/set_auth', true);
          this.$store.dispatch('auth_vuex/set_user', response.data.user);
          // this.$router.push('/');
        });
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
