<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :currentCity="this.currentCity" :cities="this.cities" :hotCities="this.hotCities" :letter="this.letter"></city-list>
    <city-alphabet :cities="this.cities" @letterChange="onLetterChange"></city-alphabet>
  </div>
</template>

<style type="text/css">
</style>

<script type="text/javascript">
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityAlphabet,
    CityList
  },
  data () {
    return {
      letter: '',
      currentCity: '',
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc, this.getHomeInfoFail)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.currentCity = res.data.city
      }
    },
    getHomeInfoFail () {
      console.log('failed')
    },
    getCityInfo () {
      axios.get('/api/city.json').then(this.getCityInfoSucc, this.getCityInfoFail)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.cities = res.data.cities
        this.hotCities = res.data.hotCities
      }
    },
    getCityInfoFail () {
      console.log('failed')
    },
    onLetterChange (e) {
      this.letter = e
    }
  },
  mounted () {
    this.getHomeInfo()
    this.getCityInfo()
  }
}
</script>
