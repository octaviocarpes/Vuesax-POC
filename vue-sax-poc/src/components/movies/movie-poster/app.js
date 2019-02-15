export default {
  name: "MoviePoster",
  props: {
    movie: Object
  },
  data() {
    return {
      image: "@/assets/img/default.jpg"
    };
  },
  computed: {
    poster() {
      const self = this;
      if (self.movie.title) {
        return `${self.movie.title}.jpg`;
      }
      return "default.jpg";
    }
  }
};
