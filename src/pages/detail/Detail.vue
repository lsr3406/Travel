<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
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
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data: function () {
    return {
      list: [{
        id: '0001',
        name: '成人票',
        children: [{
          id: '0010',
          name: 'child-1'
        }, {
          id: '0011',
          name: 'child-2'
        }]
      }, {
        id: '0002',
        name: '学生票'
      }]
    }
  }
}
</script>
