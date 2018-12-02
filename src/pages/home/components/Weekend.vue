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
  props: {
    weekendList: Array
  }
}
</script>
