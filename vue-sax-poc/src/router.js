import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home/Home.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('./views/movies/Movies.vue')
    },
    {
      path: '/planets',
      name: 'planets',
      component: () => import('./views/planets/Planets.vue')
    },
    {
      path: '/spaceships',
      name: 'spaceships',
      component: () => import('./views/spaceships/Spaceships.vue')
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('./views/characters/Characters.vue')
    }
  ]
});
