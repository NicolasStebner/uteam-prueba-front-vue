// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CharacterView from '../views/character/CharacterView.vue';
import CharacterById from '../views/character/CharacterById.vue';
import ComicView from "../views/comic/ComicView.vue"
import ComicById from "../views/comic/ComicById.vue"
import CreatorView from "../views/creator/CreatorView.vue"
import CreatorById from "../views/creator/CreatorById.vue"
import EventView from "../views/event/EventView.vue"
import EventById from "../views/event/EventById.vue"
import SerieView from "../views/serie/SerieView.vue"
import SerieById from "../views/serie/SerieById.vue"
import StoryView from "../views/story/StoryView.vue"
import StoryById from "../views/story/StoryById.vue"
import PageNotFound from "../views/PageNotFound.vue";
const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/characters', name: 'Characters', component: CharacterView },
  { path: '/characters/:id', name: 'CharacterById', component: CharacterById },
  { path: '/comics', name: 'Comics', component: ComicView },
  { path: '/comics/:id', name: 'ComicsById', component: ComicById },
  { path: '/creators', name: 'Creators', component: CreatorView },
  { path: '/creators/:id', name: 'CreatorById', component: CreatorById },
  { path: '/events', name: 'Events', component: EventView },
  { path: '/events/:id', name: 'EventById', component: EventById },
  { path: '/series', name: 'Series', component: SerieView },
  { path: '/series/:id', name: 'SeriesById', component: SerieById },
  { path: '/stories', name: 'Stories', component: StoryView },
  { path: '/stories/:id', name: 'StoryById', component: StoryById },
  { path: '/:pathMatch(.*)*',name:"PageNotFound",component:PageNotFound}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
