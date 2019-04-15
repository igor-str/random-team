<template>
  <div class="login-page">
    <div class="container">
      <h1>Log in</h1>
      <div class="form col-md-6 offset-md-3">
        <div class="form-group">
          <input type="email" name="email" id="email"
                 placeholder="Email" class="form-control"
                 v-model.trim="user.email">
        </div>
        <div class="form-group">
          <input type="password" name="password" id="password"
                 placeholder="Enter password" class="form-control"
                 v-model.trim="user.password">
        </div>
        <div v-if="errors" v-for="(item, index) in errors" :key="index">
          <div class="alert alert-danger" role="alert">
            {{item}}
          </div>
        </div>
        <div class="form-group">
          <button type="button" name="addPost" id="addPost"
                  class="btn btn-success" @blur="clearErrors()" @click="login()">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  name: 'LoginPage',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      errors: [],
    };
  },
  methods: {
    async login() {
      if (this.validateBeforeLogin()) {
        await AuthService.loginUser({
          username: this.user.email,
          password: this.user.password,
        }).then(() => {
          this.$toasted.success('Login succsess', {
            theme: 'toasted-primary',
            position: 'top-right',
            duration: 3000,
          });
        }).catch(() => {
          this.$toasted.error('Login or password is incorrect', {
            theme: 'toasted-primary',
            position: 'top-right',
            duration: 3000,
          });
        });
        // TODO: set url or name component
        // this.$router.push({ name: 'Users' });
      } else {
        this.errors.push('Ooops, not the correct data! try again...');
      }
    },
    validateBeforeLogin() {
      if (!this.user.email) return false;
      if (!this.user.password) return false;

      return true;
    },
    clearErrors() {
      this.errors = [];
    },
  },
};
</script>

<style lang="scss">

</style>
