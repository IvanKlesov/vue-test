<template>
  <button class="btn">
    <slot>

    </slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style>

.btn {
  align-self: right;

  margin-top: 15px;
  padding: 10px 15px;

  border: 1px solid teal;

  background: none;
  color: teal;
}

</style>