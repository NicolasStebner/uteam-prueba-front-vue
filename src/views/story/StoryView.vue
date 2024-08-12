<template>
  <div>
    <Title text="Stories" />
    <Loading v-if="isLoading" />
    <div v-else class="story-container">
      <div
        class="card-story"
        v-for="story in stories"
        :key="story.id"
        @click="handlerClick(story.id)"
      >
        <span class="name">
          {{ story.title }}
        </span>
        <span class="type">
          {{ capitalLetter(story.type) }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { marvelService } from "../../service/marvelService.js";
import Title from "../../ui/Title.vue";
import Loading from "../../components/loading/Loading.vue";

export default {
  name: "StoryView",
  components: { Title, Loading },
  methods: {
    handlerClick(id) {
      this.goToAbout(id);
    },
    goToAbout(id) {
      this.$router.push(`/stories/${id}`);
    },
    capitalLetter(string) {
      if (!string) return "";
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    },
  },
  setup() {
    const isLoading = ref(true);
    const stories = ref(null);

    async function getData() {
      try {
        const serviceRta = await marvelService.getStories();
        stories.value = serviceRta.results;
      } catch (error) {
        stories.value = "Error al cargar los datos";
      } finally {
        isLoading.value = false;
      }
    }
    onMounted(() => {
      getData();
    });

    return { isLoading, stories };
  },
};
</script>
<style scoped>
@import "./styles.css";
</style>
