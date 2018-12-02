<template>
  <div class="alphabet">
    <ul class="list">
      <li class="item">A</li>
      <li class="item">B</li>
      <li class="item">C</li>
      <li class="item">D</li>
      <li class="item">E</li>
      <li class="item">F</li>
      <li class="item">G</li>
      <li class="item">H</li>
      <li class="item">I</li>
      <li class="item">J</li>
      <li class="item">K</li>
      <li class="item">L</li>
      <li class="item">M</li>
      <li class="item">N</li>
      <li class="item">O</li>
      <li class="item">P</li>
      <li class="item">Q</li>
      <li class="item">R</li>
      <li class="item">S</li>
      <li class="item">T</li>
      <li class="item">U</li>
      <li class="item">V</li>
      <li class="item">W</li>
      <li class="item">X</li>
      <li class="item">Y</li>
      <li class="item">Z</li>
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
  name: 'CityAlphabet'
}
</script>
