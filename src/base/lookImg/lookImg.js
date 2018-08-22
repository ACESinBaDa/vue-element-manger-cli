import Vue from 'vue'
import TipsCompontent from './lookImg.vue'

let instance

const TipsConstructor = Vue.extend(TipsCompontent)

instance = new TipsConstructor({
  el: document.createElement('div')
})

instance.show = false
instance.imgUrl = ''
const tips = {
  show (url) {
    instance.imgUrl = url
    instance.show = true
    document.body.appendChild(instance.$el)
  },
  close () {
    instance.show = false
  }
}

export default {
  install (Vue, options) {
    if (!Vue.$lookImg) {
      Vue.$lookImg = tips
    }
    Vue.mixin({
      created () {
        this.$lookImg = Vue.$lookImg
      }
    })
  }
}
