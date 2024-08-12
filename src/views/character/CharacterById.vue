<template>
  <div>
    <Loading v-if="isLoading" />
    <div v-else>
      <Title :text="character.name" />
      <InformationContainer>
        <ImageDetail :src="characterImage" :alt="character.name" />
        <!--  -->
        <FlexContainer v-if="character.comics.returned > 0">
          <Subtitle :text="'Comics ' + '(' + character.comics.returned + ')'" />
          <CardDetail v-for="comic in character.comics.items" :item="comic" />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="character.series.returned > 0">
          <Subtitle :text="'Series ' + '(' + character.series.returned + ')'" />
          <CardDetail v-for="serie in character.series.items" :item="serie" />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="character.stories.returned > 0">
          <Subtitle
            :text="'Stories ' + '(' + character.stories.returned + ')'"
          />
          <CardDetail v-for="story in character.stories.items" :item="story" />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="character.events.returned > 0">
          <Subtitle :text="'Events ' + '(' + character.events.returned + ')'" />
          <CardDetail v-for="event in character.events.items" :item="event" />
        </FlexContainer>
        <!--  -->
      </InformationContainer>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { marvelService } from "../../service/marvelService.js";
import { useRoute } from "vue-router";
import Loading from "../../components/loading/Loading.vue";
import Title from "../../ui/Title.vue";
import Subtitle from "../../ui/Subtitle.vue";
import CardDetail from "../../components/card-detail/CardDetail.vue";
import FlexContainer from "../../components/flex-container/FlexContainer.vue";
import InformationContainer from "../../components/information-container/InformationContainer.vue";
import ImageDetail from "../../components/image-detail/ImageDetail.vue";

export default {
  name: "CharacterById",
  components: {
    Loading,
    Title,
    Subtitle,
    CardDetail,
    ImageDetail,
    FlexContainer,
    InformationContainer,
  },
  computed: {
    characterImage() {
      return `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`;
    },
  },
  setup() {
    const route = useRoute();
    const character = ref(null);
    const isLoading = ref(true);
    onMounted(async () => {
      try {
        const id = route.params.id;
        const rta = await marvelService.getCharacterById(id);
        character.value = rta.results[0];
      } catch (e) {
        console.error("error:", e);
      } finally {
        isLoading.value = false;
      }
    });
    return { character, isLoading };
  },
};
</script>

<style></style>
