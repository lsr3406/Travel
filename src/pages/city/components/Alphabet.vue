<template>
  <div class="alphabet">
    <ul class="list">
      <li class="item"
          v-for="(item, key) of cities"
          :key="key"
          :ref="key"
          @touchstart = "onTouchStart"
          @touchmove = "onTouchMove"
          @touchend = "onTouchEnd"
          @click="onLetterClick">
        {{key}}
      </li>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .alphabet
    .list
      position: absolute
      display: flex
      flex-direction: column
      justify-content: center
      right: 0
      top: 1.35rem
      bottom: 0
      width: .4rem
      .item
        line-height: .4rem
        color: $bgColorTheme
        text-align: center
</style>

<script type="text/javascript">
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    onLetterClick (e) {
      this.$emit('letterChange', e.target.innerText)
    },
    onTouchStart (e) {
      this.touchStatus = true
    },
    onTouchMove (e) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 68
        const index = Math.floor((touchY - startY) / 20)
        if (index >= 0 && index <= this.letters.length) {
          this.$emit('letterChange', this.letters[index])
        }
      }
    },
    onTouchEnd (e) {
      this.touchStatus = false
    }
  }
}
</script>
