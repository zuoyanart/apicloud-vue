<style lang="less">
// @import "../assets/css/index.less";
</style>

<template>
  <yd-layout title="啦啦啦啦" link="#">
    <div>乱七八糟的内容在这里，超出容器，将出现滚动条。</div>
    <div>乱七八糟的内容在这里，超出容器，将出现滚动条。</div>
    <div>乱七八糟的内容在这里，超出容器，将出现滚动条。</div>
    <router-view></router-view>
    <yd-button @click.native="asd">跳转到test</yd-button>

    <yd-tabbar slot="tabbar">
      <yd-tabbar-item title="首页" link="#" active>
        <yd-icon name="home" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="购物车" link="#">
        <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="个人中心" link="#">
        <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
  </yd-layout>
</template>

<script>
// import { Badge } from 'vux';

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
          y: 60,
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
    // Badge
  }
};
</script>