<template>
  <div style="display:none;"></div>
</template>

<script>

import img1 from '../../assets/image/1.jpg';
import img2 from '../../assets/image/2.jpg';
import img3 from '../../assets/image/3.jpg';
export default {
  data() {
    return {
      UIScrollPicture: {}
    };
  },
  methods: {

  },
  async mounted() {
    api.addEventListener({
      name: 'viewappear'
    }, function (ret, err) {
      alert('应用回到后台');
    });
    this.UIScrollPicture = api.require('UIScrollPicture');
    console.log('widget://' + img1.replace('../', 'dist/'));
    console.log(new Date().getTime());
    this.$nextTick(() => {
      alert(1);
    });

    this.UIScrollPicture.open({
      rect: {
        x: 0,
        y: 50,
        w: api.winWidth,
        h: 300
      },
      data: {
        paths: ['https://goss.vcg.com/creative/vcg/800/version23/VCG4198669215.jpg', 'widget://dist/2.38ad9b0d.jpg',
          'widget://' + img3.replace('../', 'dist/')],
        captions: ['竹', '屋', '花']
      },
      styles: {
        caption: {
          height: 35,
          color: '#E0FFFF',
          size: 13,
          bgColor: '#696969',
          position: 'bottom'
        },
        indicator: {
          dot: { // （可选项）JSON对象；指示器小圆点样式；不传则使用系统默认小圆点样式
            w: 10, //（必选项）数字类型；小圆点宽度
            h: 10, //（必选项）数字类型；小圆点高度
            r: 5, //（必选项）数字类型；corner 页面控制器指示标记（矩形）的圆角大小
            margin: 20 //（必选项）数字类型；小圆点间距
          },
          align: 'center',
          color: '#FFFFFF',
          activeColor: '#DA70D6'
        },
        placeholderImg: 'widget://assets/image/slide1.jpg',
        contentMode: 'scaleToFill',
        interval: 3,
        loop: true,
        fixedOn: '', //（可选项）模块视图添加到指定 frame 的名字,默认依附于当前 window
        fixed: false
      },
      function(ret, err) {
        if (ret) {
          alert(JSON.stringify(ret));
        } else {
          alert(JSON.stringify(err));
        }
      }
    });
  },
  watch: {
    '$router'() {
      console.log('asdasd');
    }
  }
}
</script>

<style>
</style>
