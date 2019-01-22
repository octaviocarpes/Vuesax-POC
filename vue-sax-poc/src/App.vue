<template lang="pug">
  #app
    vs-navbar(class="nabarx")
      vs-navbar-title
        router-link(to="/") Star Wars
      vs-navbar-item 
        router-link(to="movies") Movies
      vs-navbar-item 
        router-link(to="planets") Planets
      vs-navbar-item 
        router-link(to="spaceships") Spaceships
      vs-navbar-item 
        router-link(to="characters") Characters
    router-view
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
