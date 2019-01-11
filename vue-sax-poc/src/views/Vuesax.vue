<template lang="pug">
  .container
      vs-button(color="primary" type="flat" icon="menu" @click="openSideBar()").
        Menu
      vs-sidebar(parent="body" color="primary" v-model="sync")
        vs-button(type="flat" icon="close" color="black" @click="closeSideBar()").
          Close
        vs-button.
          Button  
</template>

<script src="../components/Vuesax/component.js"></script>

<style lang="scss" scoped>
@import "../components/Vuesax/style.scss";
</style>



