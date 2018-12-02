<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button-item">杭州</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"><div class="button-item">北京</div></div>
          <div class="button-wrapper"><div class="button-item">上海</div></div>
          <div class="button-wrapper"><div class="button-item">深圳</div></div>
          <div class="button-wrapper"><div class="button-item">广州</div></div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <ul class="area-list">
          <li class="list-item border-topbottom">阿拉尔</li>
          <li class="list-item border-topbottom">阿拉尔</li>
          <li class="list-item border-topbottom">阿拉尔</li>
        </ul>
        <div class="title border-topbottom">A</div>
        <ul class="area-list">
          <li class="list-item border-topbottom">阿拉尔</li>
          <li class="list-item border-topbottom">阿拉尔</li>
          <li class="list-item border-topbottom">阿拉尔</li>
        </ul>
        <div class="title border-topbottom">A</div>
        <ul class="area-list">
          <li class="list-item border-topbottom">阿拉尔</li>
          <li class="list-item border-topbottom">阿拉尔</li>
          <li class="list-item border-topbottom">阿拉尔</li>
        </ul>
        <div class="title border-topbottom">A</div>
        <ul class="area-list">
          <li class="list-item border-topbottom">阿拉尔</li>
          <li class="list-item border-topbottom">阿拉尔</li>
          <li class="list-item border-topbottom">阿拉尔</li>
        </ul>
        <div class="title border-topbottom">A</div>
        <ul class="area-list">
          <li class="list-item border-topbottom">阿拉尔</li>
          <li class="list-item border-topbottom">阿拉尔</li>
          <li class="list-item border-topbottom">阿拉尔</li>
        </ul>
        <div class="title border-topbottom">A</div>
        <ul class="area-list">
          <li class="list-item border-topbottom">阿拉尔</li>
          <li class="list-item border-topbottom">阿拉尔</li>
          <li class="list-item border-topbottom">阿拉尔</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    position: absolute
    overflow: hidden
    top: 1.5rem
    bottom: 0
    left: 0
    right: 0
    background-color: #eee
    .area
      background-color: #fff
      .title
        height: .44rem
        line-height: .44rem
        background-color: #eee
        font-size: .28rem
        text-indent: 0.2rem
        color: #666
      .button-list
        overflow: hidden
        padding: .07rem .7rem .07rem .07rem
        .button-wrapper
          float: left
          width: 33.33%
          .button-item
            text-align: center
            border: .02rem solid #ccc
            margin: .05rem
            padding: .1rem
            color: #777
            border-radius: .06rem
      .area-list
        .list-item
          line-height: .64rem
          color: #333
          text-indent: .2rem

</style>

<script type="text/javascript">
import BScroll from 'better-scroll'
export default {
  name: 'Citylist',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}

</script>
