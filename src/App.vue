<template>
  <div class="app"> 
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <input
        v-bind:value="title"
        @input="title = $event.target.value"
        class="input" type="text"
        placeholder="Название поста"
      >
      <input
       v-bind:value="body"
       @input="body = $event.target.value"
       class="input"
       type="text"
       placeholder="Описание поста"
      >
      <button class="btn" @click="createPost">Создать</button>
    </form>
    <div class="post" v-bind:key="post.id" v-for="post in posts">
      <div><strong>Название:</strong> {{post.title}}</div>
      <div><strong>Описание:</strong> {{post.body}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {id: 1, title: 'Vue', body: 'Description post'},
        {id: 2, title: 'Vue 2', body: 'Description post 2'},
        {id: 3, title: 'Vue 3', body: 'Description post 3'},
      ],
      title: '',
      body: ''
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body
      }

      this.posts.push(newPost);
    }
  }  
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.post {
  padding: 15px;
  margin-top: 15px;
  border: 2px solid teal;
}

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