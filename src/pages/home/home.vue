<template>
  <div class="home">
    <div class="left">
      <navBar></navBar>
    </div>
    <div class="right">
      <userTitle></userTitle>
      <div class="rCont">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import NavBar from './navBar'
import UserTitle from './userTitle'
export default {
  name: 'home',
  components: {
    NavBar,
    UserTitle
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.home
  height 100%
  width 100%
  display flex
  flex 1
  background #ffffff
  position relative
  .left
    flex 0 0 220px
    background #F8F8F8
  .wrap
    position absolute
    top 0
    left 0
    width 180px
    height 100%
    background rgba(0, 0, 0, 0)
  .right
    flex 1
    display flex
    flex-direction column
    overflow hidden
    background #ffffff
    .rCont
      flex 1
      overflow auto
    ::-webkit-scrollbar
      width 8px
      height 8px
      display block
    ::-webkit-scrollbar-thumb
      border-radius 4px
      background RGBA(136, 136, 136, 0.4)
      &:hover
        background RGBA(136, 136, 136, 1)
</style>
