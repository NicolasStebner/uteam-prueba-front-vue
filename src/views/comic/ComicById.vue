<template>
  <div>
    <Loading v-if="isLoading" />
    <div v-else>
      <Title :text="comic.title" />
      <Subtitle :text="comic.variantDescription" />
      <InformationContainer>
        <ImageDetail :src="comicImage" />
        <!--  -->
        <FlexContainer v-if="comic.creators.returned > 0">
          <Subtitle :text="'Creators' + '(' + comic.creators.returned + ')'" />
          <CardDetail v-for="creator in comic.creators.items" :item="creator" />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="comic.characters.returned > 0">
          <Subtitle
            :text="'Characters' + '(' + comic.characters.returned + ')'"
          />
          <CardDetail
            v-for="character in comic.characters.items"
            :item="character"
          />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="comic.stories.returned > 0">
          <Subtitle :text="'Stories' + '(' + comic.stories.returned + ')'" />
          <CardDetail v-for="story in comic.stories.items" :item="story" />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="comic.events.returned > 0">
          <Subtitle :text="'Events' + '(' + comic.events.returned + ')'" />
          <CardDetail v-for="event in comic.events.items" :item="event" />
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
import ImageDetail from "../../components/image-detail/ImageDetail.vue";

const item = {
  id: 1886,
  digitalId: 0,
  title: "Official Handbook of the Marvel Universe (2004) #12 (SPIDER-MAN)",
  issueNumber: 12,
  variantDescription: "SPIDER-MAN",
  description: "",
  modified: "-0001-11-30T00:00:00-0500",
  isbn: "",
  upc: "5960605667-00111",
  diamondCode: "",
  ean: "",
  issn: "",
  format: "Comic",
  pageCount: 0,
  textObjects: [
    {
      type: "issue_solicit_text",
      language: "en-us",
      text: "The spectacular sequel to last year's OFFICIAL HANDBOOK OF THE MARVEL UNIVERSE: SPIDER-MAN 2004, this Official Handbook contains in-depth bios on more than 30 of the wisecracking web-slinger's closest allies and most infamous enemies - including the Stacy Twins, fresh from the pages of AMAZING SPIDER-MAN, and Toxin, in time for this month's TOXIN #1! Plus: An all-new cover by superstar artist Tom Raney, digitally painted by Morry Hollowell.\r<br>48 PGS./Marvel PSR ...$3.99\r<br>",
    },
  ],
  resourceURI: "http://gateway.marvel.com/v1/public/comics/1886",
  urls: [
    {
      type: "detail",
      url: "http://marvel.com/comics/issue/1886/official_handbook_of_the_marvel_universe_2004_12_spider-man/spider-man?utm_campaign=apiRef&utm_source=b686fd5315c696461e9c7cb94def1fcf",
    },
  ],
  series: {
    resourceURI: "http://gateway.marvel.com/v1/public/series/787",
    name: "Official Handbook of the Marvel Universe (2004)",
  },
  variants: [],
  collections: [],
  collectedIssues: [],
  dates: [
    {
      type: "onsaleDate",
      date: "2029-12-31T00:00:00-0500",
    },
    {
      type: "focDate",
      date: "-0001-11-30T00:00:00-0500",
    },
  ],
  prices: [
    {
      type: "printPrice",
      price: 3.99,
    },
  ],
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/4bc64020a4ccc",
    extension: "jpg",
  },
  images: [
    {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/4bc64020a4ccc",
      extension: "jpg",
    },
  ],
  creators: {
    available: 12,
    collectionURI: "http://gateway.marvel.com/v1/public/comics/1886/creators",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/907",
        name: "Heather Buchanan",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/887",
        name: "Ronald Byrd",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/902",
        name: "Jeff Christiansen",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/909",
        name: "Eric Engelhard",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/906",
        name: "Mike Fichera",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/910",
        name: "Jason Godin",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/897",
        name: "Sean Mcquaid",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/900",
        name: "Barry Reese",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/905",
        name: "Al Sjoerdsma",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/911",
        name: "Bryan Thiessen",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/908",
        name: "Kerry Wilkinson",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/444",
        name: "Tom Raney",
        role: "penciller (cover)",
      },
    ],
    returned: 12,
  },
  characters: {
    available: 14,
    collectionURI: "http://gateway.marvel.com/v1/public/comics/1886/characters",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009156",
        name: "Apocalypse",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009197",
        name: "Blink",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009243",
        name: "Colossus",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009313",
        name: "Gambit",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009349",
        name: "Holocaust (Age of Apocalypse)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009417",
        name: "Magneto",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009447",
        name: "Mister Sinister",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009546",
        name: "Rogue",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1010969",
        name: "Sabretooth (Age of Apocalypse)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1010975",
        name: "Shadowcat (Age of Apocalypse)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1010976",
        name: "Silver Samurai (Age of Apocalypse)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1010979",
        name: "Storm (Age of Apocalypse)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009636",
        name: "Sunfire",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009718",
        name: "Wolverine",
      },
    ],
    returned: 14,
  },
  stories: {
    available: 2,
    collectionURI: "http://gateway.marvel.com/v1/public/comics/1886/stories",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/4430",
        name: "Cover #4430",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/4431",
        name: "Interior #4431",
        type: "interiorStory",
      },
    ],
    returned: 2,
  },
  events: {
    available: 0,
    collectionURI: "http://gateway.marvel.com/v1/public/comics/1886/events",
    items: [],
    returned: 0,
  },
};

export default {
  name: "ComicById",
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
    comicImage() {
      return `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}`;
    },
  },
  setup() {
    const route = useRoute();
    const comic = ref(item);
    const isLoading = ref(true);
    onMounted(async () => {
      try {
        const id = route.params.id;
        const rta = await marvelService.getComicById(id);
        comic.value = rta.results[0];
      } catch (e) {
        console.error("error:", e);
      } finally {
        isLoading.value = false;
      }
    });
    return { comic, isLoading };
  },
};
</script>
<style></style>
