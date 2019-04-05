/**
 * @Author: 左盐 <zuoyan>
 * @Date:   2017-12-03 19:33:24
 * @Email:  huabinglan@163.com
 * @Project: xxxx
 * @Last modified by:   zuoyan
 * @Last modified time: 2017-12-03 19:39:27
 */

const main = () => {
  return import('./pages/main.vue');
};
const index = () => {
  return import('./pages/index.vue');
};

const test = () => {
  return import('./pages/test.vue');
};


const routes = [{
  path: '/',
  component: main,
  meta: {
    title: 'asdasd'
  },
  children: [{ // 空路由，什么都没匹配到的时候执行
    path: '',
    component: index
  }, {
    path: '/test',
    component: test
  }]
}];

module.exports = routes;