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
        <switch-button title="Do you want create own team?"/>
        <div class="form-group">
          <button type="button" name="addPost" id="addPost"
                  class="btn btn-success" @click="addUser()">
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
  components: {
    SwitchButton,
  },
  name: 'AuthPage',
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
    };
  },
  methods: {
    async addUser() {
      if (this.user.firstName && this.user.lastName && this.user.selfRating !== '') {
        await UsersService.addNewUser({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          selfRating: this.user.selfRating,
        });
        // TODO: set url or name component
        // this.$router.push({ name: 'Users' });
      } else {
        // TODO: remove this alert
        // eslint-disable-next-line
        alert('Empty fields!');
      }
    },
  },
};
</script>

<style lang="scss">

</style>
