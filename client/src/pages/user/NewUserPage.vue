<template>
  <div class="container">
    <div class="users-page">
      <h1>Add new User</h1>
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
          <input type="number" name="userRating" id="user-rating"
                 placeholder="User rating" v-model.trim="user.selfRating">
        </div>
        <div class="form-group">
          <button type="button" name="addPost" id="addPost"
                  class="btn btn-block btn-primary" @click="addUser()">
            add new user
          </button>
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-success btn-block" @click="goBack()">
            go to users page
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService';

export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        selfRating: '',
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
        alert('Empty fields!');
      }
    },
    goBack() {
      this.$router.push({ name: 'Users' });
    },
  },
};
</script>

<style lang="css">
  .form input, .form textarea {
    width: 500px;
    padding: 10px;
    border: 1px solid #e0dede;
    outline: none;
    font-size: 12px;
  }

  .form div {
    margin: 20px;
  }

  .app_post_btn {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    width: 520px;
    border: none;
    cursor: pointer;
  }
</style>
