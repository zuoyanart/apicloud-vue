<style lang="css">
</style>
<style lang="less">
// @import "./assets/base.less";
</style>

<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="NavBar">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <router-view></router-view>
    <yd-tabbar slot="tabbar">
      <yd-tabbar-item title="&#x9996;&#x9875;" link="#" active>
        <yd-icon name="home" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="&#x8D2D;&#x7269;&#x8F66;" link="#">
        <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="&#x4E2A;&#x4EBA;&#x4E2D;&#x5FC3;" link="#">
        <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
  </yd-layout>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {

  }
};
</script>