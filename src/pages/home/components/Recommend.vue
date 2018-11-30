<template>
  <div>
    <div class="title">热销推荐</div>
    <ul class="recommend">
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" :alt="item.alt">
        <div class="item-info">
          <p class="item-title">{{item.name}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button" type="button">查看详情</button>
        </div>
      </li>
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
        margin-top: 0.3rem
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
  data: function () {
    return {
      recommendList: [{
        id: '0001',
        name: '杭州动物园',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/95/95db58d0da425616.water.jpg_200x200_631da622.jpg',
        alt: '杭州动物园',
        desc: '杭州动物园'
      }, {
        id: '0002',
        name: '杭州海底世界',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201212/18/f195032e85740a4b93835fbb.jpg_200x200_77761d11.jpg',
        alt: '杭州海底世界',
        desc: '杭州海底世界'
      }, {
        id: '0003',
        name: '印象西湖',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/28/288fbeccc335f774a3.img.jpg_200x200_4a81bde9.jpg',
        alt: '印象西湖',
        desc: '印象西湖'
      }, {
        id: '0004',
        name: '杭州野生动物世界',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/b6/662fc49d1d26a5a7775cf6b7f8b4ecec.water.jpg_200x200_7dec115f.jpg',
        alt: '杭州野生动物世界',
        desc: '杭州野生动物世界'
      }]
    }
  }
}
</script>
