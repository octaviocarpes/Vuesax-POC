<template lang="pug">
  .movies
    h2 Movies
      carousel(:loop="true")
        slide(v-for="movie in movies$" :key="movie.episode_id")
          MoviePoster(:movie="movie")
</template>

<script src="./app.js">
</script>

<style lang="scss">
@import url("styles.scss");
</style>
