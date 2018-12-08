<template>
  <div class="list">
    <div class="item border-bottom" v-for="item of list" :key="item.id">
      <div class="item-title">
        <span class="item-icon"></span>
        {{item.name}}
      </div>
      <div class="item-child" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .list
    .item
      .item-title
        line-height: .72rem
        font-size: .32rem
        padding: 0 .1rem
        .item-icon
          position: relative
          display: inline-block;
          width: .36rem;
          height: .36rem;
          top: .06rem
          left: .06rem
          background: url('//s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat;
          margin-right: .1rem;
          background-size: .4rem 3rem;
      .item-child
        padding-left: .3rem
</style>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array,
    default: []
  }
}
</script>
