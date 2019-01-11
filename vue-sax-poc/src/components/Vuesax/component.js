export default {
  name: 'Vuesax',
  data() {
    return {
      sync: false
    };
  },
  methods: {
    closeSideBar() {
      this.sync = false;
    },
    openSideBar() {
      this.sync = true;
    }
  }
};
