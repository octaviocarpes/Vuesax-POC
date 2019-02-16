<template lang="pug">
  .movies
    h2 Movies
    .movie-info(v-if="movie.title")
      .movie-poster
        img(:src="require(`@/assets/img/posters/${poster}`)")
      .info
        table(class="static-info")
          tr
            td(class="title")
              h2 {{ movie.title }}
          tr
            td(class="opening-crawl")
              p {{ movie.opening_crawl }}    
          tr
            td(class="additional-info")
              ul
                li
                  p(class="director") <strong>Director</strong>: {{ movie.director }}
                li
                  p(class="producer") <strong>Producer</strong>: {{ movie.producer }}
                li
                  p(class="release-date") <strong>Release date</strong>: {{ movie.release_date }}
          tr
            td(class="links")
              vs-button Species
              vs-button Planets
              vs-button Starships
              vs-button Characters
    carousel(:loop="true" :navigationEnabled="true")
      slide(v-for="movie in movies$" :key="movie.episode_id")
        MoviePoster(:movie="movie")
</template>

<script src="./app.js">
</script>

<style lang="scss">
@import url("styles.scss");
</style>
