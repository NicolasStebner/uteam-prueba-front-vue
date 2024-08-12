<template>
  <h2>{{ text }}</h2>
</template>
<script>
export default {
  name: "Subtitle",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
<style></style>
