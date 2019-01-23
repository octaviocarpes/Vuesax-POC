import { Observable } from 'rxjs';
import MoviePoster from '@/components/movies/movie-poster/MoviePoster.vue';

export default {
  name: 'Movies',
  components: {
    MoviePoster
  },
  subscriptions() {
    const movies$ = Observable.from(
      this.$http.get('https://swapi.co/api/films')
    );

    return {
      movies$
    };
  }
};
