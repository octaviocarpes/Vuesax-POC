<template lang="pug">
  .movies
    .div
    h2 Movies
    MoviePoster(v-for="movie in movies$" :key="movie.episode_id" :movie="movie")
      
</template>

<script src="./app.js">
</script>

<style lang="scss">
@import url("styles.scss");
</style>
