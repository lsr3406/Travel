<template>
  <div class="home">
    <home-header :city="this.city"></home-header>
    <home-swiper :swiperList="this.swiperList"></home-swiper>
    <home-icons :iconList="this.iconList"></home-icons>
    <home-recommend :recommendList="this.recommendList"></home-recommend>
    <home-weekend :weekendList="this.weekendList"></home-weekend>
  </div>
</template>

<style type="text/css">
</style>

<script type="text/javascript">
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeWeekend,
    HomeRecommend
  },
  data: function () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc, this.getHomeInfoFail)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.city = res.data.city
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
      }
    },
    getHomeInfoFail () {
      console.log('failed')
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
