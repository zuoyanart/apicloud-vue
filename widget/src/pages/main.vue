<template>
  <div style="width:100%;min-height:100%;padding-top:30px;">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      fixed
      @click-left="goback"
      @click-right="goback"
    ></van-nav-bar>
    <router-view></router-view>
    <van-tabbar v-model="active" fixed>
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  mounted() { }
};
</script>