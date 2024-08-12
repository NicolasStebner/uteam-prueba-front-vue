<template>
  <div>
    <Title text="Comics" />
    <Loading v-if="isLoading" />
    <div v-else>
      <InputSearch :onButtonClick="handleInput" />
      <GridContainer>
        <CardComponent
          v-for="comic in comics"
          :key="comic.id"
          :character="comic"
          :onClick="handlerClick"
        />
      </GridContainer>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { marvelService } from "../../service/marvelService.js";
import GridContainer from "../../components/grid-container/GridContainer.vue";
import CardComponent from "../../components/card/CardComponent.vue";
import Title from "../../ui/Title.vue";
import Loading from "../../components/loading/Loading.vue";
import InputSearch from "../../components/input-search/InputSearch.vue";

export default {
  name: "ComicView",
  components: { GridContainer, CardComponent, Title, Loading, InputSearch },
  setup() {
    const isLoading = ref(true);
    const comics = ref(null);

    function handlerClick(id) {
      this.$router.push(`/comics/${id}`);
    }

    async function handleInput(value) {
      try {
        isLoading.value = true;
        const rta = await marvelService.searchComic(value);
        comics.value = rta.results;
      } catch (e) {
        comics.value = "Error al cargar los datos";
      } finally {
        isLoading.value = false;
      }
    }

    async function getData() {
      try {
        const serviceRta = await marvelService.getComics();
        comics.value = serviceRta.results;
      } catch (error) {
        comics.value = "Error al cargar los datos";
      } finally {
        isLoading.value = false;
      }
    }
    onMounted(() => {
      getData();
    });

    return { isLoading, comics, handlerClick, handleInput };
  },
};
</script>
<style></style>
