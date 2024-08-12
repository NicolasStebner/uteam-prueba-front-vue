<template>
  <p>{{ text }}</p>
</template>
<script>
export default {
  name: "Description",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
<style></style>
