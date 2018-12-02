<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <div class="iconfont icon-back">&#xe720;</div>
      </div>
    </router-link>
    <div class="header-content">
      <span class="city-text city-text-active">国内城市</span><span class="city-text">敬请期待</span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    position: relative
    height: $headerHeight
    line-height: $headerHeight
    font-size: .28rem
    background-color: $bgColorTheme
    color: #fff
    .header-left
      position: absolute
      left: 0
      top: 0
      bottom: 0
      width: .64rem
      color: #fff
      .icon-back
        font-size: .42rem
        margin-left: .1rem
    .header-content
      text-align: center
      .city-text
        border: 1px solid #fff
        padding: .07rem .15rem
        margin: auto 0
      .city-text:first-of-type
        border-radius: .1rem 0 0 .1rem
      .city-text:last-of-type
        border-radius: 0 .1rem .1rem 0
      .city-text-active
        color: $bgColorTheme
        background-color #fff
</style>

<script type="text/javascript">
export default {
  name: 'CityHeader'
}
</script>
