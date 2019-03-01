<template>
  <div class="auth-page">
    <div class="container">
      <h1>Registration</h1>
      <div class="form col-md-6 offset-md-3">
        <div class="form-group">
          <input type="text" name="firstName" id="firstName"
                 placeholder="First name" class="form-control"
                 v-model.trim="user.firstName">
        </div>
        <div class="form-group">
          <input type="text" name="lastName" id="lastName"
                 placeholder="Last name" class="form-control"
                 v-model.trim="user.lastName">
        </div>
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
        <div class="form-group">
          <input type="password" name="confirm-password" id="confirm-password"
                 placeholder="Confirm password" class="form-control"
                 v-model.trim="user.confirmPassword">
        </div>
        <switch-button v-model="user.isAdmin" title="Do you want create own team?"/>
        <div v-if="errors" v-for="(item, index) in errors" :key="index">
          <div class="alert alert-danger" role="alert">
            {{item}}
          </div>
        </div>
        <div class="form-group">
          <button type="button" name="addPost" id="addPost"
                  class="btn btn-success" @blur="clearErrors()" @click="addUser()">
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService';
import SwitchButton from '@/components/blocks/SwitchButton';

export default {
  name: 'AuthPage',
  components: {
    SwitchButton,
  },
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAdmin: false,
      },
      errors: [],
    };
  },
  methods: {
    async addUser() {
      if (this.validateBeforeAddUser()) {
        await UsersService.addNewUser({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          password: this.user.password,
          isAdmin: this.user.isAdmin,
        });
        // TODO: set url or name component
        // this.$router.push({ name: 'Users' });
      } else {
        this.errors.push('Ooops, not the correct data! try again...');
      }
    },
    validateBeforeAddUser() {
      if (!this.user.firstName) return false;
      if (!this.user.lastName) return false;
      if (!this.user.email) return false;
      if (!this.user.password || this.user.password !== this.user.confirmPassword) return false;

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
