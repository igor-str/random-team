<template>
  <div class="container">
    <div class="posts">
      <h1>Add Post</h1>
      <div class="form col-md-6 offset-md-3">
        <div class="form-group">
          <input type="text" name="title" id="title"
                 placeholder="Title" class="form-control"
                 v-model.trim="post.title">
        </div>
        <div class="form-group">
        <textarea type="text" rows="5"
                  name="description" id="description" placeholder="Description"
                  v-model.trim="post.description" class="form-control">
        </textarea>
        </div>
        <div class="form-group">
          <button type="button" name="addPost" id="addPost"
                  class="btn btn-block btn-primary" @click="addPost()">
            add new post
          </button>
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-success btn-block" @click="goBack()">
            go to posts page
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService';

export default {
  name: 'NewPostPage',
  data() {
    return {
      post: {
        title: '',
        description: '',
      },
    };
  },
  methods: {
    async addPost() {
      if (this.post.title !== '' && this.post.description !== '') {
        await PostsService.addNewPost({
          title: this.post.title,
          description: this.post.description,
        });

        this.$router.push({ name: 'Posts' });
      } else {
        // TODO: remove this alert
        // eslint-disable-next-line
        alert('Empty fields!');
      }
    },
    goBack() {
      this.$router.push({ name: 'Posts' });
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
