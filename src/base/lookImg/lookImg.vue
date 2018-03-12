<template>
  <div class="lookImg" @click="close">
    <img :src="imgUrl" alt="pic">
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'lookImg',
  props: {
    imgUrl: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.lookImg
  position fixed
  z-index 100
  top 0
  left 0
  width 100%
  height 100%
  background rgba(0, 0, 0, 0.6)
  img
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    margin auto
    max-width 800px
</style>