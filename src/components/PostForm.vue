<template>
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <my-input
        v-focus
        v-model="post.title"
        placeholder="Название поста"
      />
      <my-input
       v-model="post.body"
       placeholder="Описание поста"
      />
      <my-button
        class="btn"
        @click="createPost"
        style="align-self: flex-end; margin-top: 15px;"
      >
        Создать
      </my-button>
    </form>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: {
    MyButton
  },
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
      createPost() {
        this.post.id = Date.now();
        this.$emit('create', this.post);
        this.post = {
          title: '',
          body: ''
        }
    }
  }
}
</script>

<style>

form {
  display: flex;
  flex-direction: column;

}
.input {
  width: 100%;

  padding: 10px 15px;
  margin-top: 15px;

  border: 1px solid teal;
}

.btn {
  align-self: right;

  margin-top: 15px;
  padding: 10px 15px;

  border: 1px solid teal;

  background: none;
  color: teal;
}
</style>