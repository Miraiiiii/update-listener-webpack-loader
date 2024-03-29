/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-01-10 17:00:02
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-20 11:43:38
 */
const { defineConfig } = require('@vue/cli-service')
const path = require('path')

const timeStamp = new Date().getTime()
module.exports = defineConfig({
  publicPath: './',
  outputDir: 'lib',
  assetsDir: 'static',
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
    output: {
      filename: `[name].${timeStamp}.js`
    }
  }
})
