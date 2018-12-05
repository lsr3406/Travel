<template>
  <div class="search">
    <div class="search-block">
      <input class="search-input" type="text" name="search" placeholder="请输入城市名或拼音" v-model="keyword">
    </div>
    <div class="search-content" v-show="this.showSearchList" ref="search-content">
      <ul class="search-list" >
        <li class="search-item border-topbottom"
            v-for="item of this.list"
            :key="item.id" @click="handleCityClick(item.name)">
          {{item.name}}
        </li>
        <li class="search-item" v-show="this.findNothing">没有找到匹配项</li>
      </ul>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .search
    .search-block
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
    .search-content
      z-index: 1
      position: absolute
      overflow: hidden
      top: 1.5rem
      bottom: 0
      left: 0
      right: 0
      background-color: #eee
      .search-list
        width: 100%
        .search-item
          line-height: .64rem
          color: #333
          text-indent: .2rem
          background-color: #fff
</style>

<script type="text/javascript">
import BScroll from 'better-scroll'
import { mapActions } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data: function () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapActions(['changeCity'])
  },
  computed: {
    showSearchList () {
      return this.keyword.length > 0
    },
    findNothing () {
      return this.list.length === 0
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        let res = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              res.push(value)
            }
          })
        }
        this.list = res
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs['search-content'])
  }
}
</script>
