<template>
  <div class="detail">
    <detail-banner :sightName="sightName"  :bannerImg="bannerImg"  :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list :categoryList="categoryList"></detail-list>
  </div>
</template>

<style lang="stylus" scoped>
  .detail{
    min-height: 20rem
  }
</style>

<script type="text/javascript">
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data: function () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailSucc, this.getDetailFail)
    },
    getDetailSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.sightName = res.data.sightName
        this.bannerImg = res.data.bannerImg
        this.gallaryImgs = res.data.gallaryImgs
        this.categoryList = res.data.categoryList
      }
    },
    getDetailFail () {
      console.log('Fail')
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
