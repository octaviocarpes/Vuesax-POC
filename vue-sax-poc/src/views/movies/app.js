import MoviePoster from "@/components/Movies/movie-poster/MoviePoster.vue";
import EventBus from "@/EventBus";
import { from } from "rxjs";

export default {
  name: "Movies",
  components: {
    MoviePoster
  },
  data() {
    return {
      url: "https://swapi.co/api",
      movies$: {}
    };
  },
  created() {
    this.buildView();
  },
  methods: {
    fetchMovies() {
      return this.$http.get(`${this.url}/films/`);
    },

    buildView() {
      const self = this;
      const moviesObserver = from(self.fetchMovies());
      moviesObserver.subscribe(({ data }) => {
        self.movies$ = data.results;
        self.hidePreloader();
      });
    },

    hidePreloader() {
      EventBus.$emit("HidePreloader");
    }
  }
};
