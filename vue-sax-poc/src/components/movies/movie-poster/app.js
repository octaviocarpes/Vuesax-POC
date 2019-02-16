import EventBus from "@/EventBus";

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
  },
  methods: {
    sendMovieData() {
      const self = this;
      EventBus.$emit("MovieInfo", self.movie);
    }
  }
};
