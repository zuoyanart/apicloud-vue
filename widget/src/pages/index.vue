<style lang="less">
// @import "../assets/css/index.less";
</style>

<template>
  <div>
    <badge text="123"></badge>
    <x-button type="primary" @click.native="asd">go to test</x-button>
    <base-swipper></base-swipper>
  </div>
</template>

<script>
import { Badge, XButton } from 'vux';
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
        },
        animation: {
          type: "fade",                //动画类型（详见动画类型常量）
          subType: "from_right",       //动画子类型（详见动画子类型常量）
          duration: 300
        }
      });
    }
  },
  mounted() {
    // console.log(document.location.href);
  },
  components: {
    Badge,
    XButton,
    'base-swipper': swipper
  }
};
</script>