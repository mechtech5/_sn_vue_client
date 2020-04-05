<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
            <div class="card-body">
              <form @submit.prevent="doLogin">
                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right">
                    E-Mail Address
                  </label>
                  <div class="col-md-6">
                    
                    <input type="email" class="form-control" v-model="email" placeholder="Email" autofocus>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="password" class="col-md-4 col-form-label text-md-right">
                    Password
                  </label>
                  <div class="col-md-6">
                    
                    <input type="password" class="form-control" v-model="password" placeholder="Password">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6 offset-md-4">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" name="remember" id="remember">

                      <label class="form-check-label" for="remember">
                        Remember Me
                      </label>
                    </div>
                  </div>
                </div>
                <div class="form-group row mb-0">
                  <div class="col-md-8 offset-md-4">
                    <button type="submit" class="btn btn-primary">Login</button>
                    <router-link class="btn btn-link" to="/forgot-password">
                      Forgot Your Password?
                    </router-link>
                  </div>
                </div>
              </form>
            </div>
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
      email: '',
      password: ''
    }
  },
  methods: {
    doLogin() {
      Auth.login({
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