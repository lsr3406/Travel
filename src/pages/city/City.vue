<template>
  <div class="home">
    <city-header :city="this.city"></city-header>
  </div>
</template>

<style type="text/css">
</style>

<script type="text/javascript">
import CityHeader from './components/Header.vue'
// import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader
  }
}
</script>
