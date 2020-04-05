<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>

          <div class="card-body">
            <form @submit.prevent="doRegister">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                <div class="col-md-6">
                  <input type="text" v-model="name" class="form-control" placeholder="Name" required>
                </div>
              </div>
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input type="email" v-model="email" class="form-control" placeholder="Email" required>
                </div>
              </div>
              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">
                  Password
                </label>

                <div class="col-md-6">
                  <input type="password" v-model="password" class="form-control" placeholder="Password" required>
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Register</button>
                  <router-link class="btn btn-link" to="/login">
                    Already a member?
                  </router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from '@/api/Auth';
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null
    }
  },
  methods: {
    doRegister() {
      Auth.register({
        name: this.name,
        email: this.email,
        password: this.password
      }).then(response => {
        localStorage.setItem('token', response.data.token);
        this.$store.dispatch('auth_vuex/set_auth', true);
        this.$store.dispatch('auth_vuex/set_user', response.data.user);
        this.$router.push('/');
      });
    }
  }
}
</script>