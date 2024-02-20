<!--
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-01-10 17:00:10
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-20 10:55:29
-->
# update-listener-webpack-loader

## 使用说明
```powershell
1. npm install update-listener-webpack-loader --save-dev
```
```js
2. 入口文件main.js或者其他全局文件中导入:

import UpdateListenerLoader from 'update-listener-webpack-loader'

import 'update-listener-webpack-loader/lib/update-listener-webpack-loader.css'

Vue.use(UpdateListenerLoader, {
  // ...options 配置
})

```

## 配置说明

| 参数 | 类型 | 说明 |
| :--| :-- | :-- |
| versionUrl | String | 请求版本信息根目录路径，默认为'/dist' |
| interval | Number | 检查更新间隔时间，默认为5分钟，单位为毫秒 |
| isTip | Boolean | 是否提示更新，默认为true |
| isListenJSError | Boolean | 是否监听JS报错，默认为false |
| modalProps | Object | 弹窗配置 |
| modalProps.content | String | 弹窗内容 |
| modalProps.mountedEl | Element | 弹窗挂载节点，默认为body |
| type | String | 弹窗样式类型，默认为'qingmu', 可选值为'element'、'qingmu'、'custom'(暂不支持) |
| showTest | Boolean | 弹窗常显测试 |