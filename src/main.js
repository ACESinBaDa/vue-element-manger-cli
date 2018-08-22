// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './assets/js/http' // 拦截器设置
import 'babel-polyfill' // webpack.base.conf.js 需配置 app: ['babel-polyfill', './src/main.js']
import './assets/stylus/index.styl' // 引入样式

Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
