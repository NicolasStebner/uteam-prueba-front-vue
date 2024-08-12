<template>
  <div>
    <Title text="Creators" />
    <Loading v-if="isLoading" />
    <div v-else>
      <InputSearch :onButtonClick="handleInput" />
      <GridContainer>
        <CardComponent
          v-for="creator in creators"
          :key="creator.id"
          :character="creator"
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
  name: "CreatorView",
  components: { GridContainer, CardComponent, Title, Loading, InputSearch },
  setup() {
    const isLoading = ref(true);
    const creators = ref(null);

    function handlerClick(id) {
      this.$router.push(`/creators/${id}`);
    }

    async function handleInput(value) {
      try {
        isLoading.value = true;
        const rta = await marvelService.searchCreator(value);
        creators.value = rta.results;
      } catch (e) {
        creators.value = "Error al cargar los datos";
      } finally {
        isLoading.value = false;
      }
    }

    async function getData() {
      try {
        const serviceRta = await marvelService.getCreators();
        creators.value = serviceRta.results;
      } catch (error) {
        creators.value = "Error al cargar los datos";
      } finally {
        isLoading.value = false;
      }
    }
    onMounted(() => {
      getData();
    });

    return { isLoading, creators, handlerClick, handleInput };
  },
};
</script>

<style></style>
