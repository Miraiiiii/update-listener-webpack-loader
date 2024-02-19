/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-01-10 17:00:02
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-19 14:14:44
 */
import Vue from 'vue'
import App from './App.vue'
import ListenerLoader from '../packages'

Vue.config.productionTip = false

Vue.use(ListenerLoader, {
  type: 'qingmu'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
