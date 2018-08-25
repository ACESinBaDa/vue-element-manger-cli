<template>
  <div class="menu">
    <div class="logo">
      <span>后台管理系统</span>
    </div>
    <div class="router">
      <div class="routerBox" v-for="(item,index) in menus" :key="index" ref="routerBox">
        <div class="title" :class="{ 'headActive': $route.path.indexOf(item.router) > 0 }">
          <i :class="item.icon" class="iconfont"></i>
          <span>{{ item.header }}</span>
        </div>
        <ul class="child">
          <li @click="goWhere(m.router)" :class="{ 'active': $route.path.indexOf(m.router) > 0 }" v-for="(m, i) in item.children" :key="i">{{ m.header }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'navBar',
  data () {
    return {
    }
  },
  computed: {
    menus: {
      get () {
        return [
          {
            icon: 'el-icon-menu',
            header: '总览',
            router: 'overlook',
            children: [
              {
                header: '首页',
                router: 'overview'
              }, {
                header: '数据详情',
                router: 'dataDetail'
              }
            ]
          }
        ]
      },
      set (val) {
        return val
      }
    }
  },
  methods: {
    goWhere (router) {
      this.$router.push({ name: router })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.menu
  background #F8F8F8
  height 100%
  display flex
  flex-direction column
  overflow hidden
  .logo
    height 70px
    line-height 70px
    text-align center
    background #0A1727
    img
      vertical-align middle
      width 60px
    span
      font-size 20px
      font-weight bold
      vertical-align middle
      color #ffffff
  .router
    flex 1
    overflow auto
    background #F8F8F8
    padding-top 40px
    .routerBox
      .title
        height 40px
        line-height 40px
        font-size 16px
        color #999999
        padding 0 20px
        i
          margin-right 6px
          font-size 18px
          vertical-align middle
        span
          vertical-align middle
      .headActive
        position relative
        color #ff3341
        background #FFE4E6
        transition all 0.3s
        &:before
          content ''
          position absolute
          left 0
          top 0
          width 5px
          height 100%
          background #ff3341
      .child
        padding-left 48px
        // padding-right 20px
        display flex
        flex-wrap wrap
        li
          margin-right 25px
          min-width 55px
          height 40px
          line-height 40px
          font-size 14px
          color #444444
          cursor pointer
          transition all 0.2s
          &:nth-child(2n)
            margin 0
          &:hover
            color #ff3341
        .active
          color #ff3341
        .msg
          position relative
          &:after
            content ''
            position absolute
            right 0
            top 12px
            width 4px
            height 4px
            background #ff3341
            border-radius 50%
</style>
