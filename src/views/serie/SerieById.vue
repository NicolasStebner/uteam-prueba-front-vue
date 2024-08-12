<template>
  <div>
    <Loading v-if="isLoading" />
    <div v-else>
      <Title :text="serie.title" />
      <Subtitle :text="'(' + serie.startYear + '-' + serie.endYear + ')'" />
      <InformationContainer>
        <ImageDetail :src="serieImage" :alt="serie.title" />
        <!--  -->
        <FlexContainer v-if="serie.creators.returned > 0">
          <Subtitle :text="'Creators ' + '(' + serie.creators.returned + ')'" />
          <CardDetail v-for="creator in serie.creators.items" :item="creator" />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="serie.characters.returned > 0">
          <Subtitle
            :text="'Characters ' + '(' + serie.characters.returned + ')'"
          />
          <CardDetail
            v-for="character in serie.characters.items"
            :item="character"
          />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="serie.stories.returned > 0">
          <Subtitle :text="'Stories ' + '(' + serie.stories.returned + ')'" />
          <CardDetail v-for="story in serie.stories.items" :item="story" />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="serie.comics.returned > 0">
          <Subtitle :text="'Comics ' + '(' + serie.comics.returned + ')'" />
          <CardDetail v-for="comic in serie.comics.items" :item="comic" />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="serie.events.returned > 0">
          <Subtitle :text="'Events ' + '(' + serie.events.returned + ')'" />
          <CardDetail v-for="event in serie.events.items" :item="event" />
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
import Description from "../../ui/Description.vue";
import CardDetail from "../../components/card-detail/CardDetail.vue";
import FlexContainer from "../../components/flex-container/FlexContainer.vue";
import InformationContainer from "../../components/information-container/InformationContainer.vue";
import ImageDetail from "../../components/image-detail/ImageDetail.vue";

const item = {
  id: 18454,
  title: "100th Anniversary Special (2014)",
  description: null,
  resourceURI: "http://gateway.marvel.com/v1/public/series/18454",
  urls: [
    {
      type: "detail",
      url: "http://marvel.com/comics/series/18454/100th_anniversary_special_2014?utm_campaign=apiRef&utm_source=b686fd5315c696461e9c7cb94def1fcf",
    },
  ],
  startYear: 2014,
  endYear: 2014,
  rating: "Rated T",
  type: "limited",
  modified: "2019-10-01T18:42:55-0400",
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/4/b0/5d939e25a9787",
    extension: "jpg",
  },
  creators: {
    available: 5,
    collectionURI: "http://gateway.marvel.com/v1/public/series/18454/creators",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/485",
        name: "Andy Lanning",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/9432",
        name: "Sean Ryan",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/11788",
        name: "Jennifer Van Meter",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/13138",
        name: "In-Hyuk Lee",
        role: "penciller (cover)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/12392",
        name: "David Lopez",
        role: "penciller (cover)",
      },
    ],
    returned: 5,
  },
  characters: {
    available: 7,
    collectionURI:
      "http://gateway.marvel.com/v1/public/series/18454/characters",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009165",
        name: "Avengers",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009299",
        name: "Fantastic Four",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009312",
        name: "Galactus",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1011299",
        name: "Guardians of the Galaxy",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009389",
        name: "Kingpin",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009610",
        name: "Spider-Man (Peter Parker)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009726",
        name: "X-Men",
      },
    ],
    returned: 7,
  },
  stories: {
    available: 10,
    collectionURI: "http://gateway.marvel.com/v1/public/series/18454/stories",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/110101",
        name: "cover from 100th Anniversary Special (2014) #1",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/110102",
        name: "story from 100th Anniversary Special (2014) #1",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/110103",
        name: "cover from 100th Anniversary Special (2014) #2",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/110104",
        name: "story from 100th Anniversary Special (2014) #2",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/110105",
        name: "cover from 100th Anniversary Special (2014) #3",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/110106",
        name: "story from 100th Anniversary Special (2014) #3",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/110107",
        name: "cover from 100th Anniversary Special (2014) #4",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/110108",
        name: "story from 100th Anniversary Special (2014) #4",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/110109",
        name: "cover from 100th Anniversary Special (2014) #5",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/110110",
        name: "story from 100th Anniversary Special (2014) #5",
        type: "interiorStory",
      },
    ],
    returned: 10,
  },
  comics: {
    available: 5,
    collectionURI: "http://gateway.marvel.com/v1/public/series/18454/comics",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/49007",
        name: "100th Anniversary Special (2014) #1",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/49008",
        name: "100th Anniversary Special (2014) #1",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/49009",
        name: "100th Anniversary Special (2014) #1",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/49010",
        name: "100th Anniversary Special (2014) #1",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/49011",
        name: "100th Anniversary Special (2014) #1",
      },
    ],
    returned: 5,
  },
  events: {
    available: 0,
    collectionURI: "http://gateway.marvel.com/v1/public/series/18454/events",
    items: [],
    returned: 0,
  },
  next: null,
  previous: null,
};

export default {
  name: "SerieById",
  components: {
    Loading,
    Title,
    Subtitle,
    Description,
    CardDetail,
    ImageDetail,
    FlexContainer,
    InformationContainer,
  },
  computed: {
    serieImage() {
      return `${this.serie.thumbnail.path}.${this.serie.thumbnail.extension}`;
    },
  },
  setup() {
    const route = useRoute();
    const serie = ref(item);
    const isLoading = ref(true);
    onMounted(async () => {
      try {
        const id = route.params.id;
        const rta = await marvelService.getSerieById(id);
        serie.value = rta.results[0];
      } catch (e) {
        console.error("error:", e);
      } finally {
        isLoading.value = false;
      }
    });
    return { serie, isLoading };
  },
};
</script>
<style></style>
