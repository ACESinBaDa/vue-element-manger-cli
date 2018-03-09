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
    <!-- 未认证 -->
    <div class="confirm" v-if="this.userInfo.status===3" v-show="Nocertification">
      <div class="cont">
        <div class="top">
          <i class="qiye"></i>
          <div>
            <p>请您先认证企业短信</p>
            <!-- <p>若您已提交认证信息，请耐心等待平台审核</p> -->
            <p>平台联系方式：
              <span class="blue">1337384556552</span>
            </p>
          </div>
        </div>
        <div class="bottom">
          <router-link :to="{name:'certification'}">
            <span class="btn" @click="go">去认证</span>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 证人中 -->
    <div class="confirm" v-if="this.userInfo.status===2">
      <div class="cont">
        <div class="top">
          <i class="qiye"></i>
          <div>
            <!-- <p>请您先认证企业短信</p> -->
            <p>您已提交认证信息，请耐心等待平台审核</p>
            <p>平台联系方式：
              <span class="blue">1337384556552</span>
            </p>
          </div>
        </div>
        <!-- <div class="bottom">
          <router-link :to="{name:'certification'}">
            <span class="btn">去认证</span>
          </router-link>
        </div> -->
      </div>
    </div>
    <!-- 审核未通过 -->
    <div class="confirm" v-if="this.userInfo.status===4" v-show="noPass">
      <div class="cont">
        <div class="top">
          <i class="qiye"></i>
          <div>
            <p>您的认证不通过请修改后再提交</p>
            <!-- <p>原因:营业执照不清晰</p> -->
            <p>平台联系方式：
              <span class="blue">1337384556552</span>
            </p>
          </div>
        </div>
        <div class="bottom">
          <router-link :to="{name:'certificationChange'}">
            <span class="btn" @click="change">去修改</span>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class="wrap" v-show="wrap"></div>
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
