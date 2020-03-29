<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>

          <div class="card-body">
            <form @submit="doRegister">
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
                  <input id="password" type="password" class="form-control" name="password" placeholder="Password" required>
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
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  created() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      if (localStorage.getItem('token')) {
        this.$router.push('/');
      }
    },
    register() {
      Auth.register({email: this.email, password: this.password}).then(response => {
        localStorage.setItem('token', response.data.token);
        this.$store.dispatch('auth_vuex/set_auth', true);
        this.$store.dispatch('auth_vuex/set_user', response.data.user);
        this.$router.push('/');
      });
    }
  }
}
</script>