/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-01-10 17:00:02
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-19 16:54:53
 */
import Vue from 'vue'
import App from './App.vue'
import ListenerLoader from '../packages'

Vue.config.productionTip = false

Vue.use(ListenerLoader, {})

new Vue({
  render: h => h(App),
}).$mount('#app')
