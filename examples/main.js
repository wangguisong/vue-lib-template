import Vue from 'vue'
import App from './App.vue'
import TestCom from '../src/index'
import router from './router'

Vue.use(TestCom)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


