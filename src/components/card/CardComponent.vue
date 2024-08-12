<template>
  <div class="card" @click="handleClick(character.id)">
    <img class="image" :src="characterImage" :alt="character.name" />
    <span v-if="character.name" class="name">
      {{ character.name }}
    </span>
    <span v-if="character.title" class="name">
      {{ character.title }}
    </span>
    <span v-if="character.firstName" class="name">
      {{ character.firstName }}
    </span>
  </div>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    character: {
      type: Object,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
  computed: {
    characterImage() {
      return `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`;
    },
  },
  methods: {
    handleClick() {
      this.onClick(this.character.id);
    },
  },
};
</script>
<style scoped>
@import "./styles.css";
</style>
