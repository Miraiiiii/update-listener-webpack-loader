/*
 * @Description:
 * @Author: 舌红
 * @Date: 2024-01-10 12:00:21
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-20 09:54:49
 */
/**
 * modal调用promise化
 * @param {Object} comp Vue组件配置对象
 * @param {Object} defaultConfig 默认配置对象
 * @param {Element} mountedEl 挂载对象
 * @returns {Promise} Promise对象
 */

import Vue from 'vue'

export function modalPromise(comp, defaultConfig, mountedEl) {
  return (config, removable = true) => {
    return new Promise((resolve, reject) => {
      const Ctor = Vue.extend(comp)
      const props = Object.assign({}, defaultConfig, config)
      const vm = new Ctor({
        el: document.createElement('div'),
        propsData: props
      })

      vm.$on('cancel', function (data) {
        this.$destroy()
        const parent = this.$el.parentElement
        parent && parent.removeChild(this.$el)
        reject(data)
      })

      vm.$on('confirm', function (data) {
        if (removable) {
          this.$destroy()
          const parent = this.$el.parentElement
          parent && parent.removeChild(this.$el)
        }
        resolve(data, this)
      })

      if (!mountedEl) {
        mountedEl = document.body
      }

      mountedEl.appendChild(vm.$el)
    })
  }
}
