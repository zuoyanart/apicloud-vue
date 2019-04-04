/**
 * @Author: 左盐
 * @Date:   2017-16-03 20:54:48
 * @Email:  huabinglan@163.com
 * @Project: xxxx
 * @Last modified by:   左盐
 * @Last modified time: 2017-16-03 21:09:20
 */

import Vue from 'vue';
import App from '/pages//main.vue';
import layer from 'vue-layer';
import VueRouter from 'vue-router';
import routes from '/router.js';
// import api from '../../plugins/api.js';
import tools from 'pizzatools';
 import siteConfig from '/config.js';

import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';


// import '../../assets/css/reset.css';
// import './assets/base.less';

Vue.use(VueRouter);
Vue.use(YDUI);

// Vue.prototype.$ac = api;
Vue.prototype.$layer = layer(Vue);
Vue.prototype.$tools = tools(Vue.prototype.$layer, siteConfig);
Vue.prototype.$siteConfig = siteConfig;

Vue.filter('formatTime', (value) => {
  if (!value) return '';
  return Vue.prototype.$tools.formatTime(value);
});


const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
});

window.apiready= function() {
  const app = new Vue({
    el: '#app',
    render: h => h(App),
    // router // 使用路由器
  });
}