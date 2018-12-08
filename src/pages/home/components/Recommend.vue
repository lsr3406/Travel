<template>
  <div>
    <div class="title">热销推荐</div>
    <ul class="recommend">
      <router-link tag="li" class="item border-bottom" v-for="item of recommendList" :key="item.id" :to="'/detail/' + item.id">
        <img class="item-img" :src="item.imgUrl" :alt="item.alt">
        <div class="item-info">
          <p class="item-title">{{item.name}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button" type="button">查看详情</button>
        </div>
      </router-link>
    </ul>
    <a class="show-all border-top border-bottom" href="javascript:void(0)">查看所有产品</a>
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
    display: flex
    height: 2.4rem
    .item-img
      width: 2rem
      height: 2rem
      padding: .2rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        margin-top: .3rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        color: $bgColorTheme
        background-color: #fff
        border: 1px solid $bgColorTheme
        border-radius: .2rem
        line-height: .44rem
        padding: 0 .2rem
        margin-top: .16rem
  .show-all
    display: block
    line-height: .8rem
    font-size: .3rem
    text-align: center
</style>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>
