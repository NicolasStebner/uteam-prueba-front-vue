<!-- src/views/CharacterView.vue -->
<template>
  <div>
    <Title text="Characters" />
    <Loading v-if="isLoading" />
    <div v-else>
      <InputSearch :onButtonClick="handleInput" />
      <GridContainer>
        <CardComponent
          v-for="character in characters"
          :key="character.id"
          :character="character"
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
const items = [
  {
    id: 1011334,
    name: "3-D Man",
    description: "",
    modified: "2014-04-29T14:18:17-0400",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg",
    },
    resourceURI: "http://gateway.marvel.com/v1/public/characters/1011334",
  },
  {
    id: 1017100,
    name: "A-Bomb (HAS)",
    description:
      "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
    modified: "2013-09-18T15:54:04-0400",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
      extension: "jpg",
    },
    resourceURI: "http://gateway.marvel.com/v1/public/characters/1017100",
  },
];

export default {
  name: "CharacterView",
  components: { GridContainer, CardComponent, Title, Loading, InputSearch },
  setup() {
    const isLoading = ref(true);
    const characters = ref(items);

    function handlerClick(id) {
      this.$router.push(`/characters/${id}`);
    }

    async function handleInput(value) {
      try {
        isLoading.value = true;
        const rta = await marvelService.searchCharacter(value);
        characters.value = rta.results;
      } catch (e) {
        characters.value = "Error al cargar los datos";
      } finally {
        isLoading.value = false;
      }
    }
    async function getData() {
      try {
        const serviceRta = await marvelService.getCharacters();
        characters.value = serviceRta.results;
      } catch (error) {
        characters.value = "Error al cargar los datos";
      } finally {
        isLoading.value = false;
      }
    }
    onMounted(() => {
      getData();
    });

    return { isLoading, characters, handlerClick, handleInput };
  },
};
</script>

<style></style>
