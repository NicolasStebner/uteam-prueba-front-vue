<template>
  <div class="flex-container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "FlexContainer",
};
</script>
<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
