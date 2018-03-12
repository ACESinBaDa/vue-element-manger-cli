<template>
  <div class="noCont">
    <img src="../../assets/images/noContainer.svg" alt="">
    <p>暂无数据</p>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'noCont',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.noCont
  padding 100px 0
  background #ffffff
  text-align center
  img
    width 200px
    height 200px
  p
    font-size 14px
    margin-top 20px
    color #666666
.smallNoCont
  padding 0
  img
    width 100px
    height 100px
</style>
