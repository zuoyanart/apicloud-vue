<style lang="less">
@import "../assets/index.less";
</style>

<template>
  <div id="main">
    asd1
    <br>asd1
    <br>asd
    <br>asd1
    <br>asd12
    <br>
    <yd-button @click.native="asd">asdas1</yd-button>
    <!-- <badge text="123"></badge> -->
  </div>
</template>

<script>
// import { Badge } from 'vux';

export default {
  data() {
    return {};
  },
  methods: {
    asd() {
      // this.$router.push('/test');
      api.openFrame({
        name: 'pageTest',
        url: './html/test.html',
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
    console.log(document.location.href);
  },
  components: {
    // Badge
  }
};
</script>