<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px">О сайте</my-button>

    </div>

  </div>
</template>

<script>

</script>

<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80px;
  padding: 0px 15px;

  background-color: white;
  box-shadow: 2px 2px 4px gray;
}

.navbar__btns {
  margin-left: auto;
}
</style>