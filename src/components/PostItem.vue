<template>
    <div class="post">
      <div>
        <div><strong>Название:</strong> {{post.title}}</div>
        <div><strong>Описание:</strong> {{post.body}}</div>
      </div>
      <div class="post_btns">
        <my-button
          @click="$router.push(`/posts/${post.id}`)"
        >
          Открыть
        </my-button>
        <my-button
          @click="$emit('remove', post)"
        >
          Удалить
        </my-button> 
      </div>
    </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: {
    MyButton
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

.post {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px;
  margin-top: 15px;
  border: 2px solid teal;
}

.post_btns {
  display: flex;
}
</style>