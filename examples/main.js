/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-01-10 17:00:02
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-20 11:40:26
 */
import Vue from 'vue'
import App from './App.vue'
import ListenerLoader from '../lib/update-listener-webpack-loader.umd.min.js'
import '../lib/update-listener-webpack-loader.css'
// import ListenerLoader from '../packages'

Vue.config.productionTip = false

Vue.use(ListenerLoader, {
  interval: 1000,
  showTest: true
})

new Vue({
  render: h => h(App),
}).$mount('#app')
