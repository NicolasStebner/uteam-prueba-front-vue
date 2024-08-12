<template>
  <h1>{{ text }}</h1>
</template>
<script>
export default {
  name: "Title",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
<style></style>
