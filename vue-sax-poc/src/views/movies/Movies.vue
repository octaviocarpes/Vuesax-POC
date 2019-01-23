<template lang="pug">
  .movies
    .div(v-stream="movies$") {{ movies$ }}
    h2 Movies
    vs-images(hover="scale")
      MoviePoster
</template>

<script src="./app.js">
</script>

<style lang="scss">
@import url("styles.scss");
</style>

