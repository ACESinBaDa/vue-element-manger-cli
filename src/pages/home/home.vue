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
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  components: {
    NavBar,
    UserTitle
  },
  data () {
    return {
      Nocertification: true,
      noPass: false,
      ceshi: true,
      wrap: false
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    go () {
      this.Nocertification = false
      this.wrap = true
    },
    change () {
      this.noPass = false
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
  background #E8EBF0
  position relative
  .left
    flex 0 0 180px
    background #19223D
  .wrap
    position absolute
    top 0px
    left 0
    width 180px
    height 100%
    background rgba(0, 0, 0, 0)
  .right
    flex 1
    display flex
    flex-direction column
    overflow hidden
    background #F8F8F8
    .rCont
      flex 1
      overflow auto
  .confirm
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background rgba(2, 2, 2, 0.1)
    .cont
      padding 50px 100px
      position absolute
      top 320px
      left 0
      right 0
      margin 0 auto
      width 600px
      box-sizing border-box
      background #ffffff
      box-shadow 0 1px 5px rgba(0, 0, 0, 0.2)
      i
        display inline-block
        width 74px
        height 74px
      .top>div
        display inline-block
        margin-left 30px
        p
          font-size 16px
          color #414C62
          line-height 26px
          span
            color #3EAFFF
            font-weight bold
      .bottom
        text-align center
        margin-top 32px
</style>
