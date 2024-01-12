/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-01-10 16:16:52
 * @LastEditors: 舌红
 * @LastEditTime: 2024-01-11 16:48:49
 */
import ListenerLoader from "./updateListener/index.js"

/**
 * 监听版本更新
 * @param {Object} Vue Vue对象
 * @param {Object} options 配置对象
 * @param {String} options.versionUrl 请求版本信息根目录路径，默认为'/dist'
 * @param {Number} options.interval 检查更新间隔时间，默认为5分钟，单位为毫秒
 * @param {Boolean} options.isTip 是否提示更新，默认为true
 * @param {Boolean} options.isListenJSError 是否监听JS报错，默认为false
 * @returns {Void} 无返回值
 */

export default ListenerLoader

