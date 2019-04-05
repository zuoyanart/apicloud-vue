<style lang="less">
</style>

<template>
  <div id="main">
    <br>asd1
    <br>asd
    <br>asd1
    <br>asd12
    <br>

    <van-button type="danger" @click="asd">危险按钮</van-button>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  methods: {
    asd() {
      this.$router.push('/');
    }
  },
  created() {

  },
  mounted() {
    console.log('asdasd', api.safeArea);
  },
  components: {

  }
};
</script>