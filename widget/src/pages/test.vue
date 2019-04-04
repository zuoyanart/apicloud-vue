<style lang="less">
</style>

<template>
  <div id="main">
    <br>asd1
    <br>asd
    <br>asd1
    <br>asd12
    <br>

    <x-button type="warn" @click.native="asd">go to index</x-button>
  </div>
</template>

<script>
import { Badge, XButton } from 'vux';

export default {
  data() {
    return {};
  },
  methods: {
    asd() {

      api.openFrame({
        name: 'pageINdex',
        url: './index.html',
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
    Badge,
    XButton
  }
};
</script>