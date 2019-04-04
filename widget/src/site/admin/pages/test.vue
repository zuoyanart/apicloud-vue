<style lang="less">
@import "../assets/index.less";
</style>

<template>
  <div id="main">
    <yd-rollnotice autoplay="2000">
      <yd-rollnotice-item>
        <span style="color:#F00;">荐</span>荣耀V9 3月超级钜惠！
      </yd-rollnotice-item>
      <yd-rollnotice-item>
        <span style="color:#F00;">荐</span>3.23京东超级品牌日格力盛典
      </yd-rollnotice-item>
      <yd-rollnotice-item>
        <span style="color:#F00;">荐</span>京东服饰 早春新品低至7折
      </yd-rollnotice-item>
    </yd-rollnotice>test
    <br>asd1
    <br>asd
    <br>asd1
    <br>asd12
    <br>
    <yd-button @click.native="asd">test</yd-button>
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

      api.openFrame({
        name: 'pageINdex',
        url: '../index.html',
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
  created() {

  },
  mounted() {
    console.log('asdasd', api.safeArea);
  },
  components: {
    // Badge
  }
};
</script>