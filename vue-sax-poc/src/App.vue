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
import EventBus from "@/EventBus";

export default {
  components: {
    Preloader
  },
  watch: {
    $route: (to, from) => {
      EventBus.$emit("ShowPreloader");
    }
  }
};
</script>


<style lang="scss">
#app {
  font-family: 'Kanit', "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .navbar a {
    font-size: 1em;
  }

  #lottie-animation {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    svg {
      width: 200px !important;
      height: 200px !important;
    }
  }
}
</style>
