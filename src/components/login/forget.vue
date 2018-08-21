<template>
  <div class="forget">
    <loginBase>
      <ul class="box" slot="box">
        <li>
          <h2 class="head">忘记密码</h2>
        </li>
        <li class="inputLi">
          <el-input class="input-m" v-model="userPhone" placeholder="手机号"></el-input>
        </li>
        <li class="inputLi">
          <el-input class="input-s" v-model="msgCode" placeholder="验证码"></el-input>
          <b class="button-s" v-show="!isRuning" @click="getMsg">验证码</b>
          <b class="button-s gray" v-show="isRuning">{{ time }}s</b>
        </li>
        <li class="inputLi">
          <el-input class="input-m" v-model="password" placeholder="新密码(6-20个字符)" type="password"></el-input>
        </li>
        <li class="inputLi">
          <el-input class="input-m" v-model="rePassword" placeholder="确认新密码" type="password"></el-input>
        </li>
        <li>
          <b class="button-l" @click="sureReset">确认重置</b>
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
  name: 'forget',
  mixins: [getMessage],
  components: {
    LoginBase
  },
  data () {
    return {
      userPhone: '',
      msgCode: '',
      password: '',
      rePassword: '',
      isRuning: false,
      time: ''
    }
  },
  methods: {
    sureReset () {
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
          message: '请输入新密码',
          type: 'warning'
        })
      } else if (this.rePassword === '') {
        this.$message({
          message: '请再次输入新密码',
          type: 'warning'
        })
      } else if (this.password !== this.rePassword) {
        this.$message({
          message: '两次密码不一致',
          type: 'warning'
        })
      } else {
        this.forget()
      }
    },
    forget () {
      this.$ajax.post('/api/seller/account/resetPwd', {
        telephone: this.userPhone,
        code: this.msgCode,
        type: 2,
        password: md5(this.password)
      }).then((data) => {
        if (data.data.code === '200') {
          this.$message({
            message: '重置成功',
            type: 'success',
            onClose: () => {
              this.$router.push({ name: 'login' })
            }
          })
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
.forget
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
  .goWhere
    margin 32px 0
    overflow hidden
    .left
      float left
    .right
      float right
</style>
