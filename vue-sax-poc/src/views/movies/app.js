import MoviePoster from "@/components/movies/movie-poster/MoviePoster.vue";
import { Carousel, Slide } from 'vue-carousel';
import EventBus from "@/EventBus";
import { from } from "rxjs";

export default {
  name: "Movies",
  components: {
    MoviePoster,
    Carousel,
    Slide
  },
  data() {
    return {
      url: "https://swapi.co/api",
      movies$: []
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
      this.createMoviesObserver();
    },

    createMoviesObserver() {
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
