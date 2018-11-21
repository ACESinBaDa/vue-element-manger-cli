import Vue from 'vue'
import AlertCompontent from '../alert.vue'

let instance

const AlertConstructor = Vue.extend(AlertCompontent)

instance = new AlertConstructor({
  el: document.createElement('div')
})

instance.show = false

const alert = {
  show (options = {}) {
    if (options.cancelButton) {
      instance.cancelButton = options.cancelButton
    }
    if (options.sureButton) {
      instance.sureButton = options.sureButton
    }
    instance.message = options.message
    instance.show = true
    document.body.appendChild(instance.$el)

    instance.$on('sureButtonClick', () => {
      if (typeof options.callback === 'function') {
        options.callback && options.callback()
      }
    })
  },
  close () {
    instance.show = false
  }
}

export default {
  install (Vue, options) {
    if (!Vue.$alert) {
      Vue.$alert = alert
    }
    Vue.mixin({
      created () {
        this.$alert = Vue.$alert
      }
    })
  }
}
