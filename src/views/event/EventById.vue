<template>
  <div>
    <Loading v-if="isLoading" />
    <div v-else>
      <Title :text="event.title" />
      <InformationContainer>
        <Description :text="event.description" />
        <ImageDetail :src="eventImage" :alt="event.title" />
        <!--  -->
        <FlexContainer v-if="event.creators.returned > 0">
          <Subtitle :text="'Creators ' + '(' + event.creators.returned + ')'" />
          <CardDetail v-for="creator in event.creators.items" :item="creator" />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="event.characters.returned > 0">
          <Subtitle
            :text="'Characters ' + '(' + event.characters.returned + ')'"
          />
          <CardDetail
            v-for="character in event.characters.items"
            :item="character"
          />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="event.stories.returned > 0">
          <Subtitle :text="'Stories ' + '(' + event.stories.returned + ')'" />
          <CardDetail v-for="story in event.stories.items" :item="story" />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="event.comics.returned > 0">
          <Subtitle :text="'Comics ' + '(' + event.comics.returned + ')'" />
          <CardDetail v-for="comic in event.comics.items" :item="comic" />
        </FlexContainer>
        <!--  -->
        <FlexContainer v-if="event.series.returned > 0">
          <Subtitle :text="'Series ' + '(' + event.series.returned + ')'" />
          <CardDetail v-for="serie in event.series.items" :item="serie" />
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
import Description from "../../ui/Description.vue";
import CardDetail from "../../components/card-detail/CardDetail.vue";
import FlexContainer from "../../components/flex-container/FlexContainer.vue";
import InformationContainer from "../../components/information-container/InformationContainer.vue";
import ImageDetail from "../../components/image-detail/ImageDetail.vue";

const item = {
  id: 238,
  title: "Civil War",
  description:
    "After a horrific tragedy raises questions on whether or not super heroes should register with the government, longtime Avengers teammates Captain America and Iron Man end up on opposite sides of the argument! Writer Mark Millar and artist Steve McNiven split the Marvel Universe in two as friend fights friend in one of the most celebrated and successful events of all-time!",
  resourceURI: "http://gateway.marvel.com/v1/public/events/238",
  urls: [
    {
      type: "detail",
      url: "http://marvel.com/comics/events/238/civil_war?utm_campaign=apiRef&utm_source=b686fd5315c696461e9c7cb94def1fcf",
    },
    {
      type: "wiki",
      url: "http://marvel.com/universe/Civil_War?utm_campaign=apiRef&utm_source=b686fd5315c696461e9c7cb94def1fcf",
    },
  ],
  modified: "2013-11-07T10:40:01-0500",
  start: "2006-07-01 00:00:00",
  end: "2007-01-29 00:00:00",
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/2/d0/51cb5356c2063",
    extension: "jpg",
  },
  creators: {
    available: 153,
    collectionURI: "http://gateway.marvel.com/v1/public/events/238/creators",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/807",
        name: "Comicraft",
        role: "letterer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/452",
        name: "Virtual Calligr",
        role: "letterer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/12401",
        name: "Sotocolor",
        role: "colorist",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/11735",
        name: "Laura Allred",
        role: "colorist",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/598",
        name: "Brad Anderson",
        role: "colorist",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/191",
        name: "Kaare Andrews",
        role: "colorist",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/11543",
        name: "Dan Brown",
        role: "colorist",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/11401",
        name: "Various",
        role: "penciller (cover)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/666",
        name: "Roberto Campus",
        role: "penciller (cover)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/13661",
        name: "Roberto Aguirre-Sacasa",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/24",
        name: "Brian Michael Bendis",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/367",
        name: "Ed Brubaker",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/887",
        name: "Ronald Byrd",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/13574",
        name: "Michael Allred",
        role: "inker",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/4014",
        name: "Axel Alonso",
        role: "editor",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/11854",
        name: "Nicole Boose",
        role: "editor",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/12741",
        name: "Ramón F. Bachs",
        role: "penciller",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/5268",
        name: "Jim Calafiore",
        role: "penciller",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/970",
        name: "Dennis Calero",
        role: "penciller",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/13215",
        name: "Rain Beredo",
        role: "colorist (cover)",
      },
    ],
    returned: 20,
  },
  characters: {
    available: 101,
    collectionURI: "http://gateway.marvel.com/v1/public/events/238/characters",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009148",
        name: "Absorbing Man",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009740",
        name: "Arnim Zola",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009165",
        name: "Avengers",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009175",
        name: "Beast",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009182",
        name: "Bishop",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009184",
        name: "Black Bolt",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009185",
        name: "Black Cat",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009187",
        name: "Black Panther",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009191",
        name: "Blade",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009198",
        name: "Blizzard",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1010371",
        name: "Boomerang",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009212",
        name: "Bullseye",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009214",
        name: "Cable",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1017317",
        name: "Cable (Deadpool)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009220",
        name: "Captain America",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1010338",
        name: "Captain Marvel (Carol Danvers)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009234",
        name: "Chameleon",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1010754",
        name: "Chase Stein",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009241",
        name: "Cloak",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1010676",
        name: "Colleen Wing",
      },
    ],
    returned: 20,
  },
  stories: {
    available: 321,
    collectionURI: "http://gateway.marvel.com/v1/public/events/238/stories",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/543",
        name: "Interior #543",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/956",
        name: "1 of ?",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/957",
        name: "1 of ?",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/958",
        name: "2 of ?",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/959",
        name: "2 of ?",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/960",
        name: "3 of ?",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/961",
        name: "3 of ?",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/962",
        name: "2 of 6 - Civil War",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/963",
        name: "2 of 6 - Civil War",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/964",
        name: "3 of 6 - Civil War",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/965",
        name: "3 of 6 - Civil War",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/966",
        name: "4 of 6 - Civil War",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/967",
        name: "4 of 6 - Civil War",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/968",
        name: "5 of 6 - Civil War",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/969",
        name: "5 of 6 - Civil War",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/971",
        name: "4 of 6 - Civil War",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/972",
        name: "6 of 6 - Civil War (45th Anniversary)",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/973",
        name: "6 of 6 - Civil War (45th Anniversary)",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/1183",
        name: "Amazing Spider-Man (1999) #529",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/1184",
        name: "1 of 5 - Identity Thief",
        type: "interiorStory",
      },
    ],
    returned: 20,
  },
  comics: {
    available: 140,
    collectionURI: "http://gateway.marvel.com/v1/public/events/238/comics",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/4425",
        name: "Black Panther (2005) #18",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5243",
        name: "Black Panther (2005) #21",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5408",
        name: "Black Panther (2005) #22",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5667",
        name: "Black Panther (2005) #23",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5805",
        name: "Black Panther (2005) #24",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/6047",
        name: "Black Panther (2005) #25",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/13513",
        name: "Black Panther: Civil War (Trade Paperback)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5849",
        name: "Blade (2006) #5",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/4450",
        name: "Cable & Deadpool (2004) #30",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/4803",
        name: "Cable & Deadpool (2004) #31",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5091",
        name: "Cable & Deadpool (2004) #32",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5086",
        name: "Captain America (2004) #22",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5239",
        name: "Captain America (2004) #23",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5402",
        name: "Captain America (2004) #24",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/6010",
        name: "Captain America (2004) #25",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/6133",
        name: "Civil War (Trade Paperback)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/6415",
        name: "Civil War (Trade Paperback)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/22582",
        name: "Civil War (Hardcover)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/4216",
        name: "Civil War (2006) #1",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/4313",
        name: "Civil War (2006) #2",
      },
    ],
    returned: 20,
  },
  series: {
    available: 62,
    collectionURI: "http://gateway.marvel.com/v1/public/events/238/series",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/454",
        name: "Amazing Spider-Man (1999 - 2013)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/784",
        name: "Black Panther (2005 - 2008)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/2226",
        name: "Black Panther: Civil War (2007)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/1123",
        name: "Blade (2006 - 2007)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/693",
        name: "Cable & Deadpool (2004 - 2008)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/832",
        name: "Captain America (2004 - 2011)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/1893",
        name: "Civil War (2007)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/6208",
        name: "Civil War (2006 - Present)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/1067",
        name: "Civil War (2006 - 2007)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/1101",
        name: "Civil War Files (2006)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/6248",
        name: "CIVIL WAR HC [DM ONLY] (2008 - Present)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/1900",
        name: "Civil War: Amazing Spider-Man (2007)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/1871",
        name: "Civil War: Battle Damage Report (2007)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/2256",
        name: "Civil War: Captain America (2007)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/2316",
        name: "Civil War: Choosing Sides (2006)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/1898",
        name: "Civil War: Fantastic Four (2007)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/10102",
        name: "Civil War: Fantastic Four (2010)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/1109",
        name: "Civil War: Front Line (2006 - 2007)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/11636",
        name: "Civil War: Front Line (2010 - Present)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/1964",
        name: "Civil War: Front Line Book 1 (2007)",
      },
    ],
    returned: 20,
  },
  next: {
    resourceURI: "http://gateway.marvel.com/v1/public/events/255",
    name: "Initiative",
  },
  previous: {
    resourceURI: "http://gateway.marvel.com/v1/public/events/212",
    name: "Planet Hulk",
  },
};

export default {
  name: "EventById",
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
    eventImage() {
      return `${this.event.thumbnail.path}.${this.event.thumbnail.extension}`;
    },
  },
  setup() {
    const route = useRoute();
    const event = ref(item);
    const isLoading = ref(true);
    onMounted(async () => {
      try {
        const id = route.params.id;
        const rta = await marvelService.getEventById(id);
        event.value = rta.results[0];
      } catch (e) {
        console.error("error:", e);
      } finally {
        isLoading.value = false;
      }
    });
    return { event, isLoading };
  },
};
</script>
<style></style>
