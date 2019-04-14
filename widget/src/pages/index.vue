<style lang="less">
// @import "../assets/css/index.less";
</style>

<template>
  <div>
    <van-button type="danger" @click="asd">go to test</van-button>
    <base-swipper></base-swipper>
  </div>
</template>

<script>
import swipper from '../components/swipper/index';

export default {
  data() {
    return {};
  },
  methods: {
    asd() {
      api.openFrame({
        name: 'pageTest',
        url: './test.html',
        rect: {
          x: 0,
          y: 0,
          w: 'auto',
          h: 'auto'
        },
        pageParam: {
          name: 'test'
        }
      });
    }
  },
  mounted() {
    alert('index mounted');
  },
  components: {
    'base-swipper': swipper
  }
};
</script>