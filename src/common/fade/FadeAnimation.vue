<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<style lang="stylus" scoped>
  .fade-enter, .fade-leave-to
    opacity: 0
  .fade-enter-active, .fade-leave-active
    transition: opacity .5s
</style>

<script>
export default {
  name: 'FadeAnimation'
}
</script>
