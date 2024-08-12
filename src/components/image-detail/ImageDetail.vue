<template>
  <div class="detail-container">
    <img class="image" :src="src" :alt="alt" />
  </div>
</template>
<script>
export default {
  name: "ImageDetail",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>
.detail-container {
  display: flex;
  justify-content: center;
}
.image {
  width: 30%;
  height: 30%;
  border-radius: 8px;
}
</style>
