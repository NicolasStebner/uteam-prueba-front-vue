<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/characters">Characters</router-link></li>
        <li><router-link to="/comics">Comics</router-link></li>
        <li><router-link to="/creators">Creators</router-link></li>
        <li><router-link to="/events">Events</router-link></li>
        <li><router-link to="/series">Series</router-link></li>
        <li><router-link to="/stories">Stories</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "./style.css";
</style>
