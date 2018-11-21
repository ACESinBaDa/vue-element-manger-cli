<template>
  <transition name="fade">
    <div class="loading" v-if="loadShow">
      <div class="loadBox">
        <div class="fan">
          <i class="icon iconfont icon-react"></i>
        </div>
        <span>加载中</span>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'loading',
  props: {
    loadShow: Boolean
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.loading
  position fixed
  width 100%
  height 100%
  top 0
  left 0
  display flex
  align-items center
  justify-content center
  transition all 0.2s
  .loadBox
    width 10rem
    height 10rem
    border-radius 4px
    background rgba(0, 0, 0, 0.6)
    display flex
    flex-direction column
    justify-content center
    align-items center
    .fan
      animation rote 2s linear infinite
      @keyframes rote
        from
          transform rotate(0)
        to
          transform rotate(360deg)
      .icon
        font-size 3rem
        line-height 3rem
        color #ffffff
    span
      font-size 1rem
      margin-top 1.2rem
      color #ffffff
.fade-enter-active, .fade-leave-active
  opacity 0
  transform translate(0, -2rem)
</style>
