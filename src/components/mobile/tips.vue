<template>
  <transition name="fade-up">
    <div class="tips" v-if="tipsShow">
      <span>{{ tipsMessage }}</span>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'tips',
  props: {
    tipsShow: Boolean,
    tipsMessage: String
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.tips
  position fixed
  width 100%
  bottom 4rem
  display flex
  justify-content center
  align-items center
  transition all 0.2s
  span
    font-size 1.2rem
    line-height 3rem
    padding 0 2rem
    border-radius 4px
    color #ffffff
    background rgba(0, 0, 0, 0.7)
.fade-up-enter-active, .fade-up-leave-active
  opacity 0
  transform translate3d(0, -100%, 0)
</style>
