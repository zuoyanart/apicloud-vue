import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import tools from 'pizzatools';
import siteConfig from '/config.js';
import routes from './router.js'
import Vant from 'vant';
import 'vant/lib/index.css';

// import YDUI from 'vue-ydui';
// import 'vue-ydui/dist/ydui.rem.css';


import './assets/css/reset.css';
// import './assets/base.less';
Vue.use(VueRouter);
// Vue.use(YDUI);
Vue.use(Vant);

Vue.prototype.$tools = tools(siteConfig);
Vue.prototype.$siteConfig = siteConfig;
Vue.prototype.$ac = window.api;

Vue.filter('formatTime', (value) => {
  if (!value) return '';
  return Vue.prototype.$tools.formatTime(value);
});

const router = new VueRouter({
  // mode: 'history',
  routes
});

window.apiready = function () {
  const app = new Vue({
    el: '#app',
    render: h => h(App),
    router
  });
};