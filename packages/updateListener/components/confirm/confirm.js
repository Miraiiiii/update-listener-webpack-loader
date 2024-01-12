/*
 * @Description:
 * @Author: 舌红
 * @Date: 2024-01-10 11:59:14
 * @LastEditors: 舌红
 * @LastEditTime: 2024-01-10 14:50:12
 */
import { modalPromise } from '../../utils/modalPromise'
import Confirm from './index.vue'

export async function openConfirm(config, mountedEl) {
  return modalPromise(Confirm, config, mountedEl)()
}
