<template>
  <div class="login">
    <loginBase>
      <ul class="box" slot="box" @keyup.13="loginTest">
        <li>
          <h2 class="head">登 录</h2>
          {{ sidebar }}
        </li>
        <li class="inputLi">
          <el-input class="input-m" v-model="userPhone" placeholder="帐号"></el-input>
        </li>
        <li class="inputLi">
          <el-input class="input-m" v-model="password" placeholder="密码" type="password"></el-input>
        </li>
        <li>
          <b class="button-l" @click="loginTest">登 录</b>
        </li>
        <li class="goWhere">
          <span class="left text-button" @click="$router.push({name: 'reg'})">去注册</span>
          <span class="right text-button" @click="$router.push({name: 'forget'})">忘记密码</span>
        </li>
      </ul>
    </loginBase>
  </div>
</template>
<script type="text/ecmascript-6">
import LoginBase from '@/components/loginBase/loginBase'
import { mapActions, mapGetters } from 'vuex'
import md5 from 'md5'
export default {
  name: 'login',
  components: {
    LoginBase
  },
  data () {
    return {
      userPhone: '',
      password: '',
      ip: ''
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'sidebar'
    ])
  },
  methods: {
    setCookie (name, value, day) {
      let date = new Date()
      date.setDate(date.getDate() + day)
      document.cookie = name + '=' + value + ';expires=' + date
    },
    getCookie (name) {
      let reg = RegExp(name + '=([^;]+)')
      let arr = document.cookie.match(reg)
      if (arr) {
        return arr[1]
      } else {
        return ''
      }
    },
    loginTest () {
      if (this.userPhone === '') {
        this.$message({
          message: '请输入用户手机号',
          type: 'warning'
        })
      } else if (this.password === '') {
        this.$message({
          message: '请输入密码',
          type: 'warning'
        })
      } else {
        this.login()
      }
    },
    login () {
      this.setSidebar(['123456'])
      this.$axios.post('/seller/account/login', {
        userName: this.userPhone,
        password: md5(this.password),
        domain: window.location.host
        // ip: this.ip
      }).then((data) => {
        if (data.data.code === '200') {
          this.setUserInfo(data.data.data)
          this.$message({
            message: '登录成功!',
            type: 'success',
            duration: 1500,
            onClose: () => {
              this.setCookie('__un__', this.userPhone, 30)
              this.setCookie('__pw__', this.password, 30)
              if (parseInt(this.userInfo.shopBindStatus) === 1) {
                this.$router.push({ name: 'userCenter' })
              } else {
                this.$router.push({ name: 'bindShop' })
              }
            }
          })
        } else if (data.data.code === '1019') {
          this.$message({
            message: '您已在域名' + data.data.message + '注册, 请在该域名下登录',
            type: 'warning'
          })
        }
      })
    },
    getIp () {
      this.$ajax.get('/ipApi', {
      }).then((data) => {
        if (data.status === 200) {
          this.ip = data.data.ip
        }
      }).catch((err) => {
        console.error(err)
      })
    },
    ...mapActions([
      'setUserInfo',
      'setSidebar'
    ])
  },
  mounted () {
    if (this.getCookie('__un__') && this.getCookie('__pw__')) {
      this.userPhone = this.getCookie('__un__')
      this.password = this.getCookie('__pw__')
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.login
  .box
    margin-bottom 35px
  .head
    margin-bottom 32px
  .inputLi
    margin-bottom 16px
  .goWhere
    margin 32px 0
    overflow hidden
    .left
      float left
    .right
      float right
</style>
