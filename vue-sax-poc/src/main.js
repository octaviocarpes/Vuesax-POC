import Vue from "vue";

import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import "material-icons/iconfont/material-icons.css";
import VueCarousel from "vue-carousel";

import App from "./App.vue";
import router from "./router";

// eslint-disable-next-line
import Rx from 'rxjs';
import VueRx from "vue-rx";

import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;
Vue.use(VueRx, Rx);
Vue.use(VueAxios, axios);
Vue.use(Vuesax);
Vue.use(VueCarousel);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
