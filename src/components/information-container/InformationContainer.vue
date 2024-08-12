<template lang="">
  <div class="information-container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "InformationContainer",
};
</script>
<style scoped>
.information-container {
  width: 40vw;
  margin: 0 auto;
  padding: 10px;
  text-align: left;
}
</style>
