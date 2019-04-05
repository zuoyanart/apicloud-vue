<style lang="less">
</style>

<template>
  <div>
    <base-swipper></base-swipper>
    <van-button type="danger" @click="asd">危险按钮</van-button>
  </div>
</template>

<script>
import swipper from '../components/swipper/index';

export default {
  data() {
    return {

    };
  },
  methods: {
    asd() {
      this.$router.push('/test');
    }
  },
  mounted() {

  },
  destroyed() {

  },
  components: {
    'base-swipper': swipper
  }
};
</script>