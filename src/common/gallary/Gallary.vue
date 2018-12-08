<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item of imgs" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: rgba(0, 0, 0, .8)
    .wrapper
      // overflow: hidden
      width: 100%
      height: 0
      padding-bottom: 55%
      .swiper-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observeParents: true, // 解决添加业务之后屏幕滑动问题
        observer: true // 解决添加业务之后屏幕滑动问题
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>
