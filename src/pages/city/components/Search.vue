<template>
  <div class="search">
    <input class="search-input" type="text" name="search" placeholder="请输入城市名或拼音">
  </div>
</template>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .search
    height: .48rem
    padding: .08rem .1rem
    background-color: #eee
    .search-input
      box-sizing: border-box
      width: 100%
      height: .48rem
      line-height: .48rem
      text-align: center
      border-radius: .06rem
      padding: 0 .1rem
      color: #777
</style>

<script type="text/javascript">
export default {
  name: 'CitySearch'
}
</script>
