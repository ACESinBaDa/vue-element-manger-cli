import Vue from 'vue'
import TipsCompontent from '../tips.vue'

let instance

const TipsConstructor = Vue.extend(TipsCompontent)

instance = new TipsConstructor({
  el: document.createElement('div')
})

instance.tipsShow = false
instance.tipsMessage = ''
const tips = {
  show (option = {}) {
    instance.tipsMessage = option.message
    instance.tipsShow = true
    setTimeout(() => {
      this.close()
    }, 2500)
    document.body.appendChild(instance.$el)
  },
  close () {
    instance.tipsShow = false
  }
}

export default {
  install (Vue, options) {
    if (!Vue.$tips) {
      Vue.$tips = tips
    }
    Vue.mixin({
      created () {
        this.$tips = Vue.$tips
      }
    })
  }
}
