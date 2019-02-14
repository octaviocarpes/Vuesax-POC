<template lang="pug">
  #app
    vs-navbar(class="nabarx navbar" type="border")
      vs-navbar-title
        router-link(to="/") Star Wars
      vs-spacer
      vs-navbar-item 
        router-link(to="movies") Movies
      vs-navbar-item 
        router-link(to="planets") Planets
      vs-navbar-item 
        router-link(to="spaceships") Spaceships
      vs-navbar-item 
        router-link(to="characters") Characters
    router-view
    Preloader
</template>

<script>
import Preloader from "@/components/Preloader/Preloader.vue";
export default {
  components: {
    Preloader
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .navbar a {
    font-size: 1em;
  }
}
</style>
