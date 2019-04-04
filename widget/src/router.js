const index = () => {
  return import('./pages/index.vue');
};

const test = () => {
  return import('./pages/test.vue');
};




const routes = [{
  path: '/',
  component: index
}, {
  path: '/test',
  component: test
}];

module.exports = routes;