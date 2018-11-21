import Vue from 'vue'
import LoadingCompontent from '../loading.vue'

let instance

const LoadingConstructor = Vue.extend(LoadingCompontent)

instance = new LoadingConstructor({
  el: document.createElement('div')
})

instance.loadShow = false
const loading = {
  show () {
    instance.loadShow = true
    document.body.appendChild(instance.$el)
  },
  close () {
    instance.loadShow = false
  }
}

export default {
  install (Vue, options) {
    if (!Vue.$loading) {
      Vue.$loading = loading
    }
    Vue.mixin({
      created () {
        this.$loading = Vue.$loading
      }
    })
  }
}
