<template>
  <div class="item">
    <span>
      {{ item.name }}
    </span>
    <span v-if="item.type"> ({{ item.type }}) </span>
    <span v-if="item.role"> ({{ item.role }}) </span>
  </div>
</template>
<script>
export default {
  name: "CardDetail",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
@import "./styles.css";
</style>
