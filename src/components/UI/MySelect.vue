<template>
  <select :value="modelValue" @change="changeOption">
    <option disabled value="">Выберите фильтр</option>
    <option
      v-for="option in options"
      :key='option.value'
      :value="option.value"
    >
      {{option.name}}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  }
}
</script>

<style>

.input {
  width: 100%;

  padding: 10px 15px;
  margin-top: 15px;

  border: 1px solid teal;
}

</style>