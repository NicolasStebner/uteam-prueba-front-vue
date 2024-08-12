<template>
  <div class="input-search-container">
    <input
      v-model="inputValue"
      type="text"
      placeholder="Search something..."
      class="input"
    />
    <button @click="handleClick" class="button">Enviar</button>
  </div>
</template>

<script>
export default {
  name: "InputSearch",
  props: {
    onButtonClick: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    handleClick() {
      this.onButtonClick(this.inputValue);
    },
  },
};
</script>

<style scoped>
/* Agrega estilos si lo deseas */
@import "./styles.css";
</style>
