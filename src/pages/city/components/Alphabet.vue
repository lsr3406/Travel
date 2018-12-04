<template>
  <div class="alphabet">
    <ul class="list">
      <li class="item"
          v-for="key of this.letters"
          :key="key"
          :ref="key"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          @click="handleLetterClick">
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
      touchStatus: false,
      startY: 0,
      timer: null,
      firstLetter: null
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
  updated () {
    this.firstLetter = Object.keys(this.$refs)[0]
    this.startY = this.$refs[this.firstLetter][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('letterChange', e.target.innerText)
    },
    handleTouchStart (e) {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // console.log(this.startY)
          const touchY = e.touches[0].clientY - 68
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('letterChange', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd (e) {
      this.touchStatus = false
    }
  }
}
</script>
