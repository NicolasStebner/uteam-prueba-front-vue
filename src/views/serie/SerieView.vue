<template>
  <div>
    <Title text="Series" />
    <Loading v-if="isLoading" />
    <div v-else>
      <InputSearch :onButtonClick="handleInput" />
      <GridContainer>
        <CardComponent
          v-for="serie in series"
          :key="serie.id"
          :character="serie"
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
  name: "SerieView",
  components: { GridContainer, CardComponent, Title, Loading, InputSearch },
  setup() {
    const isLoading = ref(true);
    const series = ref(null);

    function handlerClick(id) {
      this.$router.push(`/series/${id}`);
    }

    async function handleInput(value) {
      try {
        isLoading.value = true;
        const rta = await marvelService.searchSerie(value);
        series.value = rta.results;
      } catch (e) {
        series.value = "Error al cargar los datos";
      } finally {
        isLoading.value = false;
      }
    }
    async function getData() {
      try {
        const serviceRta = await marvelService.getSeries();
        series.value = serviceRta.results;
      } catch (error) {
        series.value = "Error al cargar los datos";
      } finally {
        isLoading.value = false;
      }
    }
    onMounted(() => {
      getData();
    });

    return { isLoading, series, handlerClick, handleInput };
  },
};
</script>
<style></style>
