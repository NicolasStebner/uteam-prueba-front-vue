<template>
  <div class="grid-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GridContainer",
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px; /* Espacio entre las tarjetas */
  padding: 16px;
  width: 66vw;
  max-width: 1200px; /* Ancho máximo de la cuadrícula */
  margin: 0 auto;
}
</style>
