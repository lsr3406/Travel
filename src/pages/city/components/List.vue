<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button-item">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of this.hotCities" :key="item.id"><div class="button-item">{{item.name}}</div></div>
        </div>
      </div>
      <div class="area">
        <div class="citiesGroup" v-for="(cityGroup, key) of this.cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <ul class="area-list">
            <li class="list-item border-topbottom" v-for="city of cityGroup" :key="city.id">{{city.name}}</li>
          </ul>
        </div>
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
    z-index: 0
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
        text-indent: .2rem
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
  props: {
    currentCity: String,
    cities: Object,
    hotCities: Array,
    letter: String
  },
  methods: {
    // letterChange ()
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter: function () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}

</script>
