<template lang="">
  <div>
    <Loading v-if="isLoading" />
    <div v-else>
      <Title :text="creator.fullName" />
      <InformationContainer>
        <ImageDetail :src="creatorImage" :alt="creator.fullName" />
        <!--  -->
        <FlexContainer v-if="creator.comics.returned > 0">
          <Subtitle :text="'Comics ' + '(' + creator.comics.returned + ')'" />
          <CardDetail v-for="comic in creator.comics.items" :item="comic" />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="creator.series.returned > 0">
          <Subtitle :text="'Series ' + '(' + creator.series.returned + ')'" />
          <CardDetail v-for="serie in creator.series.items" :item="serie" />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="creator.stories.returned > 0">
          <Subtitle :text="'Stories ' + '(' + creator.stories.returned + ')'" />
          <CardDetail v-for="story in creator.stories.items" :item="story" />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="creator.events.returned > 0">
          <Subtitle :text="'Events ' + '(' + creator.events.returned + ')'" />
          <CardDetail v-for="event in creator.events.items" :item="event" />
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
const item = {
  id: 9716,
  firstName: "Benjamin",
  middleName: "",
  lastName: "",
  suffix: "",
  fullName: "Benjamin",
  modified: "2018-07-23T15:12:00-0400",
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/c/40/4bb52c198ff2a",
    extension: "jpg",
  },
  resourceURI: "http://gateway.marvel.com/v1/public/creators/9716",
  comics: {
    available: 2,
    collectionURI: "http://gateway.marvel.com/v1/public/creators/9716/comics",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/27398",
        name: "New Mutants (2009) #1 (BENJAMIN VARIANT)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/27465",
        name: "New Mutants (2009) #4 (BENJAMIN VARIANT)",
      },
    ],
    returned: 2,
  },
  series: {
    available: 1,
    collectionURI: "http://gateway.marvel.com/v1/public/creators/9716/series",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/7455",
        name: "New Mutants (2009 - 2012)",
      },
    ],
    returned: 1,
  },
  stories: {
    available: 3,
    collectionURI: "http://gateway.marvel.com/v1/public/creators/9716/stories",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/53754",
        name: "Cover #53754",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/60236",
        name: "Cover #60236",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/81864",
        name: "Sky Doll Space Ship #1",
        type: "cover",
      },
    ],
    returned: 3,
  },
  events: {
    available: 0,
    collectionURI: "http://gateway.marvel.com/v1/public/creators/9716/events",
    items: [],
    returned: 0,
  },
  urls: [
    {
      type: "detail",
      url: "http://marvel.com/comics/creators/9716/benjamin?utm_campaign=apiRef&utm_source=b686fd5315c696461e9c7cb94def1fcf",
    },
  ],
};
export default {
  name: "CreatorById",
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
    creatorImage() {
      return `${this.creator.thumbnail.path}.${this.creator.thumbnail.extension}`;
    },
  },
  setup() {
    const route = useRoute();
    const creator = ref(item);
    const isLoading = ref(true);
    onMounted(async () => {
      try {
        const id = route.params.id;
        const rta = await marvelService.getCreatorById(id);
        creator.value = rta.results[0];
      } catch (e) {
        console.error("error:", e);
      } finally {
        isLoading.value = false;
      }
    });
    return { creator, isLoading };
  },
};
</script>
<style></style>
