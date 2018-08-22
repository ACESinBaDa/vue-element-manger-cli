<template>
  <div class="reg">
    <loginBase>
      <ul class="box" slot="box">
        <li>
          <h2 class="head">注 册</h2>
        </li>
        <li class="inputLi">
          <el-input class="input-m" v-model="userPhone" placeholder="手机号"></el-input>
        </li>
        <li class="inputLi">
          <el-input class="input-s" v-model="msgCode" placeholder="验证码" type="number"></el-input>
          <b class="button-s" v-show="!isRuning" @click="getMsg">验证码</b>
          <b class="button-s gray" v-show="isRuning">{{ time }}s</b>
        </li>
        <li class="inputLi">
          <el-input class="input-m" v-model="password" placeholder="密码" type="password"></el-input>
        </li>
        <li class="inputLi">
          <el-input class="input-m" v-model="qqNum" placeholder="QQ"></el-input>
        </li>
        <li class="inputLi">
          <el-input class="input-m" v-model="wechatNum" placeholder="微信"></el-input>
          <p class="fontSize-s">qq与微信便于我们的客服为您更好的服务</p>
        </li>
        <li>
          <b class="button-l" @click="regTest">立即注册</b>
        </li>
        <li class="goWhere">
          <span class="right text-button" @click="$router.push({name: 'login'})">返回登录</span>
        </li>
      </ul>
    </loginBase>
  </div>
</template>
<script type="text/ecmascript-6">
import LoginBase from '../base/loginBase/index'
import { getMessage } from '../../assets/js/message.js'
import md5 from 'md5'
export default {
  name: 'reg',
  mixins: [getMessage],
  components: {
    LoginBase
  },
  data () {
    return {
      userPhone: '',
      password: '',
      msgCode: '',
      qqNum: '',
      wechatNum: '',
      isRuning: false,
      time: ''
    }
  },
  methods: {
    regTest () {
      if (this.userPhone === '') {
        this.$message({
          message: '请输入用户手机号',
          type: 'warning'
        })
      } else if (this.msgCode === '') {
        this.$message({
          message: '请输入短信验证码',
          type: 'warning'
        })
      } else if (this.password === '') {
        this.$message({
          message: '请输入密码',
          type: 'warning'
        })
      } else {
        this.regNow()
      }
    },
    regNow () {
      let urlApi = ''
      if (this.$route.query.si) {
        urlApi = '/api/seller/account/sellerInvitorRegister'
      } else if (this.$route.query.ii) {
        urlApi = '/api/seller/account/register'
      } else {
        urlApi = '/api/seller/account/register'
      }
      this.$ajax.post(urlApi, {
        telephone: this.userPhone,
        code: this.msgCode,
        type: 1,
        password: md5(this.password),
        qq: this.qqNum,
        wechatNum: this.wechatNum,
        domain: window.location.host,
        inviteCode: this.$route.query.si || this.$route.query.ii || ''
      }).then((data) => {
        if (data.data.code === '200') {
          this.$message({
            message: data.data.message,
            type: 'success',
            onClose: () => {
              localStorage.setItem('__isFirstReg__', 1)
              this.$router.push({ name: 'login' })
            }
          })
        } else if (data.data.code === '1008') {
          if (data.data.message === window.location.host) {
            this.$message({
              message: '您已注册, 请直接登录',
              type: 'warning'
            })
          } else {
            this.$message({
              message: '您已在域名' + data.data.message + '注册过帐号',
              type: 'warning'
            })
          }
        } else {
          this.$message({
            message: data.data.message,
            type: 'warning'
          })
        }
      }).catch((err) => {
        console.error(err)
        this.$message({
          message: '生意太火爆了, 请稍后再试',
          type: 'error'
        })
      })
    },
    getMsg () {
      if (this.userPhone === '') {
        this.$message({
          message: '请输入用户手机号',
          type: 'warning'
        })
      } else {
        this.sedMsg()
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.reg
  .box
    margin-bottom 35px
  .head
    margin-bottom 32px
  .inputLi
    margin-bottom 16px
    .gray
      background gray
    .button-s
      margin-left 10px
    .fontSize-s
      margin-top 8px
  .goWhere
    margin 32px 0
    overflow hidden
    .left
      float left
    .right
      float right
</style>
