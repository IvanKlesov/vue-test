<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button @click="showDialog" style="margin: 15px 0">
      Создать пост
    </my-button> 
    <my-dialog v-model:show="dialogVisible">
      <post-form
        @create="createPost"
      />
    </my-dialog>

    <post-list
      :posts="posts"
      @remove="removePost"
    />
  
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "./components/UI/MyDialog.vue";
import MyButton from "./components/UI/MyButton.vue";

export default {
  components: {
    PostList,
    PostForm,
    MyDialog,
    MyButton
},
  data() {
    return {
      posts: [
        {id: 1, title: 'Vue', body: 'Description post'},
        {id: 2, title: 'Vue 2', body: 'Description post 2'},
        {id: 3, title: 'Vue 3', body: 'Description post 3'},
      ],
      dialogVisible: false
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisisble = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
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
</style>