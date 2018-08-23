<template>
  <div class="loginBase">
    <div class="logo">
      <img class="loginName" src="@/assets/images/logo.png" alt="logo">
      <p>
        <strong>{{ '站名' }}</strong>
        <br>
        <span>{{ 'sinbada.com' }}</span>
      </p>
    </div>
    <div class="banner">
      <img class="bannerImg" src="@/assets/images/back.png" alt="求礼品">
      <slot name="box" class="box"></slot>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'loginBase',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.loginBase
  position absolute
  top 0
  left 0
  min-width 800px
  min-height 600px
  width 100%
  height 100%
  background #ffffff
  display flex
  flex-direction column
  .logo
    padding 32px 120px 33px
    display flex
    align-items center
    .loginName
      width 55px
      height 55px
    p
      margin-left 11px
      strong
        font-size 32px
        color #444444
        letter-spacing 4px
      span
        font-size 14px
        color #888888
        letter-spacing 1px
  .banner
    background #F6DB66
    flex 1
    margin-bottom 100px
    display flex
    justify-content center
    align-items center
    .bannerImg
      width 376px
      margin-right 120px
    .box
      background #ffffff
      padding 32px 30px
      border-radius 4px
      border 1px solid #DDDDDD
</style>
