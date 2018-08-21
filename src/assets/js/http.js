import axios from 'axios'
import store from '../../store'
import ElementUI, {
  Loading
} from 'element-ui'
import router from '../../router'

// axios 超时配置
axios.defaults.timeout = 40000

// 全屏加载中
let load
// 禁止第一次
let errTime = 0

// 不需要全屏加载的数组
let unLoadRouterArr = ['login', 'reg', 'forget']

/* http 拦截器 */
/* axios token验证 */
axios.interceptors.request.use((config) => {
  console.log(process.env.NODE_ENV)
  config.url = `/api${config.url}`
  if (store.state.userInfo) {
    config.headers.accesstoken = store.state.userToken // 请求接口header参数添加
    config.headers.userAccountId = store.state.userInfo.sellerAccountId
  }
  if (unLoadRouterArr.indexOf(router.currentRoute.name) < 0) {
    load = Loading.service({
      fullscreen: true
    })
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

/* 响应数据获取/更新token */
axios.interceptors.response.use((res) => {
  // 需做用户token和userid存储
  if (res.config.headers.accesstoken !== res.headers.accesstoken && res.headers.accesstoken) {
    store.dispatch('setUserToken', res.headers.accesstoken)
  }
  if (unLoadRouterArr.indexOf(router.currentRoute.name) < 0) {
    load.close()
  }
  if (res.data.code !== '200') {
    ElementUI.Message({
      message: res.data.message,
      type: 'warning'
    })
  }
  return res
}, (error) => {
  console.error(error)
  if (unLoadRouterArr.indexOf(router.currentRoute.name) < 0) {
    load.close()
  }
  if (error.response) {
    switch (error.response.status) {
      case 403:
        if (errTime === 0) {
          errTime = errTime + 1
          ElementUI.MessageBox.confirm('您还未登录, 请先登录', '提示', {
            type: 'error',
            showCancelButton: false,
            closeOnClickModal: false
          }).then(() => {
            router.replace({
              name: 'login'
            })
            errTime = 0
          }).catch((err) => {
            console.error(err)
          })
          break
        } else {
          return false
        }
    }
    return false
  }
  return Promise.reject(error.response.data)
})

export default axios
