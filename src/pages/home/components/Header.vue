<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-back">&#xe720;</div>
    </div>
    <div class="header-content">
      <span class="iconfont icon-scope">&#xe60c;</span>
      <span class="search-text">请输入要搜索的内容</span>
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.currentCity}}
        <span class="iconfont icon-dropdown">&#xe654;</span>
      </div>
    </router-link>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    display: flex
    line-height: $headerHeight
    background-color: $bgColorTheme
    color: #fff
    font-size: 1.1em
    .header-left
      float: left
      width: .64rem
      text-align: center
      .icon-back
        font-size: .42rem
        margin-left: .1rem
    .header-content
      flex: 1
      height: .64rem
      line-height: .64rem
      margin: .12rem .2rem
      background-color: #fff
      color: #ccc
      border-radius: .1rem
      .icon-scope
        font-size: .38rem
        margin-left: .1rem
    .header-right
      float: right
      min-width: 1.04rem
      text-align: center
      color: #fff
      padding: 0 0.1rem
      .icon-dropdown
        margin-left: -.05rem
</style>

<script type="text/javascript">
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  }
}
</script>
