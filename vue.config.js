/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-01-10 17:00:02
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-19 11:31:22
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
})
