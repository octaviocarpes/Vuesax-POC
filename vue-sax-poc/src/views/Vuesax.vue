<template>
  <div>
    <vs-button
      @click="sync=!sync"
      color="primary"
      type="filled"
    >{{!sync?'Open Alert':'Close Alert'}}</vs-button>
    <vs-alert :active.sync="sync" closable close-icon="cancel">
      Lorem ip
      sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
    </vs-alert>

    <vs-button color="primary" type="filled">Primary</vs-button>
    <vs-button color="primary" type="border" icon="home">Home</vs-button>
  </div>
</template>

<script>
export default {
  name: "Vuesax",
  data() {
    return {
      sync: true
    };
  },
  methods: {
    closeAlert() {
      this.sync = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>



