<template>
  <Title text="Page not found :(" />
  <router-link to="/">
    <Subtitle text="Go to Home" />
  </router-link>
</template>
<script>
import Title from "../ui/Title.vue";
import Subtitle from "../ui/Subtitle.vue";

export default {
  name: "PageNotFound",
  components: {
    Title,
    Subtitle,
  },
};
</script>
<style></style>
