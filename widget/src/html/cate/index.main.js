import Vue from 'vue';
import App from '/pages//cate/index.vue';
import tools from 'pizzatools';
 import siteConfig from '/config.js';

import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';


// import '../../assets/css/reset.css';
// import './assets/base.less';

Vue.use(YDUI);

Vue.prototype.$tools = tools(siteConfig);
Vue.prototype.$siteConfig = siteConfig;

Vue.filter('formatTime', (value) => {
  if (!value) return '';
  return Vue.prototype.$tools.formatTime(value);
});


window.apiready= function() {
  const app = new Vue({
    el: '#app',
    render: h => h(App)
  });
}