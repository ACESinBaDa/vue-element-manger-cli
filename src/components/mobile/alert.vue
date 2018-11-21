<template>
  <transition name="fadeIn">
    <div class="alert" v-if="show">
      <div class="alertBox">
        <div class="cont">
          {{ message }}
        </div>
        <div class="footer">
          <span class="cancel" @click="cancel" v-if="cancelButton">{{ cancelButton }}</span>
          <span class="sure" @click="sure" v-if="sureButton">{{ sureButton }}</span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'alert',
  props: {
    show: Boolean,
    message: String,
    cancelButton: {
      type: String,
      default: '取消'
    },
    sureButton: {
      type: String,
      default: '确认'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    cancel () {
      this.show = false
      this.$emit('cancel')
    },
    sure () {
      this.$emit('sureButtonClick')
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.alert
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background rgba(0, 0, 0, 0.6)
  display flex
  justify-content center
  align-items center
  transition all 0.3s
  .alertBox
    width 80%
    background #ffffff
    border-radius 4px
    transition all 0.3s
    .cont
      padding 3rem
      text-align center
      font-size 1.4rem
      line-height 2rem
    .footer
      display flex
      justify-content space-between
      margin-top 1rem
      margin-bottom 1rem
      span
        flex 1
        margin-left 1rem
        margin-right 1rem
        text-align center
        font-size 1.4rem
        line-height 3rem
        border-radius 4px
      .cancel
        background #eeeeee
        box-shadow 0 1px 2px #dedede
      .sure
        background orange
        color #ffffff
.fadeIn-enter-active, .fadeIn-leave-active
  opacity 0
.zoom-enter-active, .zoom-leave-active
  opacity 0
  transform scale(0)
</style>
