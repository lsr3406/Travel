<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
  </div>
</template>

<style lang="stylus" scoped>
  .detail{
    height: 20rem
  }
</style>

<script type="text/javascript">
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>
