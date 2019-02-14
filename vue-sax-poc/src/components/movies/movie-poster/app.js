export default {
  name: "MoviePoster",
  props: {
    movie: Object
  },
  watch: {
    movie: (newValue, oldValue) => {
      console.log(newValue);
      console.log(oldValue);
    }
  }
};
