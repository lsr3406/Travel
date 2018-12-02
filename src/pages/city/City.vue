<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<style type="text/css">
</style>

<script type="text/javascript">
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
// import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>
