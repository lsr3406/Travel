<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="杭州动物园">
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-badge">
          <span class="iconfont banner-icon">&#xe746;</span>
          <span class="banner-number">{{gallaryImgs.length}}</span>
        </div>
      </div>
    </div>
    <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
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
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
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
