<template>
  <div>
    <div class="title">周末游</div>
    <ul class="weekend">
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" :alt="item.alt">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.name}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/ellipsis.styl'
  .title
    line-height: .8rem
    margin-top: .2rem
    text-indent: .2rem
    background-color: #eee
  .item
    overflow: hidden
    height: 4.2rem
    .item-img-wrapper
      overflow: hidden
      width: 100%
      height: 0
      padding-bottom: 37%
      .item-img
        width: 100%
    .item-info
      flex: 1
      padding: .1rem .2rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
</style>

<script>
export default {
  name: 'HomeWeekend',
  data: function () {
    return {
      weekendList: [{
        id: '0001',
        name: '承载杭城的历史之地',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/7d45cc38259e0.jpg_r_640x214_156f4299.jpg',
        desc: '饱经沧桑的地方诉述着这座城的段段衷肠',
        alt: '饱经沧桑的地方诉述着这座城的段段衷肠'
      }, {
        id: '0002',
        name: '泡汤好去处',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/a3/9c9d78e925e8bc.jpg_r_640x214_74656d68.jpg',
        desc: '泡在氤氲的温泉中，聆听冬天脚步的声音',
        alt: '泡在氤氲的温泉中，聆听冬天脚步的声音'
      }, {
        id: '0003',
        name: '青山秀水，精致暖汤',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1510/c1/afe3ab32b3bc23.jpg_r_640x214_beb61760.jpg',
        desc: '天然高品质温泉，这个冬天秀美容颜首选',
        alt: '天然高品质温泉，这个冬天秀美容颜首选'
      }, {
        id: '0004',
        name: '美丽普陀山',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
        desc: '人间仙境杭州，佛教圣地普陀山等你来玩！',
        alt: '人间仙境杭州，佛教圣地普陀山等你来玩！'
      }, {
        id: '0005',
        name: '温州动人秋色',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/fb/c45a951a9b4305.jpg_r_640x214_26fcfd26.jpg',
        desc: '细数温州那些美到陶醉的赏秋地',
        alt: '细数温州那些美到陶醉的赏秋地'
      }]
    }
  }
}
</script>
