<template>
  <div>
    <Title text="Events" />
    <Loading v-if="isLoading" />
    <div v-else>
      <InputSearch :onButtonClick="handleInput" />
      <GridContainer>
        <CardComponent
          v-for="event in events"
          :key="event.id"
          :character="event"
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
  name: "EventView",
  components: { GridContainer, CardComponent, Title, Loading, InputSearch },
  setup() {
    const isLoading = ref(true);
    const events = ref(null);

    function handlerClick(id) {
      this.$router.push(`/events/${id}`);
    }

    async function handleInput(value) {
      try {
        isLoading.value = true;
        const rta = await marvelService.searchEvent(value);
        events.value = rta.results;
      } catch (e) {
        events.value = "Error al cargar los datos";
      } finally {
        isLoading.value = false;
      }
    }

    async function getData() {
      try {
        const serviceRta = await marvelService.getEvents();
        events.value = serviceRta.results;
      } catch (error) {
        events.value = "Error al cargar los datos";
      } finally {
        isLoading.value = false;
      }
    }
    onMounted(() => {
      getData();
    });

    return { isLoading, events, handlerClick, handleInput };
  },
};
</script>
<style></style>
