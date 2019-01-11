<template>
  <div id="app">
    <div id="nav">
      <vs-navbar v-model="activeItem" class="nabarx">
        <vs-button type="flat" icon="menu"></vs-button>
        <vs-navbar-title>Hello world</vs-navbar-title>
        <vs-navbar-item index="0">
          <router-link to="/">Home</router-link>
        </vs-navbar-item>
        <vs-navbar-item index="1">
          <router-link to="/about">About</router-link>
        </vs-navbar-item>
        <vs-navbar-item index="2">
          <router-link to="/vuesax">Vuesax!</router-link>
        </vs-navbar-item>
        <vs-spacer></vs-spacer>
        <vs-input icon="search" placeholder="Search" v-model="search"/>
      </vs-navbar>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
