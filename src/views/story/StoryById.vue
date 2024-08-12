<template lang="">
  <div>
    <Loading v-if="isLoading" />
    <div v-else>
      <InformationContainer>
        <Title :text="story.title" />
        <!--  -->
        <FlexContainer v-if="story.creators.returned > 0">
          <Subtitle :text="'Creators ' + '(' + story.creators.returned + ')'" />
          <CardDetail v-for="creator in story.creators.items" :item="creator" />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="story.characters.returned > 0">
          <Subtitle
            :text="'Characters ' + '(' + story.characters.returned + ')'"
          />
          <CardDetail
            v-for="character in story.characters.items"
            :item="character"
          />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="story.series.returned > 0">
          <Subtitle :text="'Series ' + '(' + story.series.returned + ')'" />
          <CardDetail v-for="serie in story.series.items" :item="serie" />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="story.comics.returned > 0">
          <Subtitle :text="'Comics ' + '(' + story.comics.returned + ')'" />
          <CardDetail v-for="comic in story.comics.items" :item="comic" />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="story.events.returned > 0">
          <Subtitle :text="'Events ' + '(' + story.events.returned + ')'" />
          <CardDetail v-for="event in story.events.items" :item="event" />
        </FlexContainer>
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
const item = {
  id: 7,
  title:
    "Investigating the murder of a teenage girl, Cage suddenly learns that a three-way gang war is under way for control of the turf",
  description: "",
  resourceURI: "http://gateway.marvel.com/v1/public/stories/7",
  type: "story",
  modified: "1969-12-31T19:00:00-0500",
  thumbnail: null,
  creators: {
    available: 0,
    collectionURI: "http://gateway.marvel.com/v1/public/stories/7/creators",
    items: [],
    returned: 0,
  },
  characters: {
    available: 0,
    collectionURI: "http://gateway.marvel.com/v1/public/stories/7/characters",
    items: [],
    returned: 0,
  },
  series: {
    available: 1,
    collectionURI: "http://gateway.marvel.com/v1/public/stories/7/series",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/6",
        name: "CAGE (2002)",
      },
    ],
    returned: 1,
  },
  comics: {
    available: 1,
    collectionURI: "http://gateway.marvel.com/v1/public/stories/7/comics",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/941",
        name: "CAGE (Hardcover)",
      },
    ],
    returned: 1,
  },
  events: {
    available: 0,
    collectionURI: "http://gateway.marvel.com/v1/public/stories/7/events",
    items: [],
    returned: 0,
  },
  originalIssue: {
    resourceURI: "http://gateway.marvel.com/v1/public/comics/941",
    name: "CAGE (Hardcover)",
  },
};

export default {
  name: "StoryById",
  components: {
    Loading,
    Title,
    Subtitle,
    CardDetail,
    FlexContainer,
    InformationContainer,
  },
  computed: {
    storyImage() {
      return `${this.story.thumbnail.path}.${this.story.thumbnail.extension}`;
    },
  },
  setup() {
    const route = useRoute();
    const story = ref(item);
    const isLoading = ref(true);
    onMounted(async () => {
      try {
        const id = route.params.id;
        const rta = await marvelService.getStoryById(id);
        story.value = rta.results[0];
      } catch (e) {
        console.error("error:", e);
      } finally {
        isLoading.value = false;
      }
    });
    return { story, isLoading };
  },
};
</script>
<style></style>
