<template lang="pug">    
  .poster
    img(:src="require(`@/assets/img/posters/${poster}`)")
    h3 {{movie.title}}
</template>

<script src="./app.js">
</script>

<style lang="scss">
@import url("./styles.scss");
</style>
