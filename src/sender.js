import Vue from 'vue'
import Sender from './Sender.vue'
import store from './store'
import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  store,
  i18n,
  render: h => h(Sender)
}).$mount('#app')
