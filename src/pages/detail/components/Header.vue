<template>
  <div class="header">
    <router-link tag="div" class="header-abs" to="/">
      <div class="iconfont icon-back">&#xe720;</div>
    </router-link>
    <div class="header-fixed" :style="opacityStyle">
      <router-link tag="div" class="header-back" to="/">
        <div class="iconfont icon-back">&#xe720;</div>
      </router-link>
      <div class="header-title">
        景点详情
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    .header-abs
      position: absolute
      top: .2rem
      left: .2rem
      border-radius: .4rem
      width: .8rem
      height: .8rem
      line-height: .8rem
      font-size: 2.5rem
      color: #fff
      text-align: center
      background-color: rgba(0, 0, 0, .8)
      .icon-back
        font-size: .5rem
    .header-fixed
      overflow: hidden
      position: fixed
      display: flex
      width: 100%
      height: $headerHeight
      line-height: $headerHeight
      top: 0
      left: 0
      bottom: 0
      background-color: $bgColorTheme
      color: #fff
      .header-back
        float: left
        z-index: 1
        width: .64rem
        margin-right: -.64rem
        text-align: center
        .icon-back
          font-size: .42rem
          margin-left: .1rem
      .header-title
        flex: 1
        text-align: center
        font-size: .32rem
</style>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      this.opacityStyle.opacity = (top - 60) / (140 - 60)
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
