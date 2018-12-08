<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1505/95/95db58d0da425616.water.jpg_600x330_8e2d4d17.jpg" alt="杭州动物园">
      <div class="banner-info">
        <div class="banner-title">
          杭州动物园(AAAA景区)
        </div>
        <div class="banner-badge">
          <span class="iconfont banner-icon">&#xe746;</span>
          <span class="banner-number">8</span>
        </div>
      </div>
    </div>
    <common-gallary :imgs="this.imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      display: flex
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .5))
      .banner-title
        flex: 1
        font-size: .36rem
        margin: .1rem .2rem
      .banner-badge
        padding: 0 .4rem
        line-height: .4rem
        height: .4rem
        margin-top: .2rem
        background-color: rgba(0, 0, 0, .8)
        border-radius: .2rem
        font-size: .24rem
        .iconfont
          font-size: .24rem
</style>

<script type="text/javascript">
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/95/95db58d0da425616.water.jpg_600x330_8e2d4d17.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/95/95db58d0da425616.water.jpg_600x330_8e2d4d17.jpg'
      }]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>
