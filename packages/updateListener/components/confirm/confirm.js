/*
 * @Description:
 * @Author: 舌红
 * @Date: 2024-01-10 11:59:14
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-19 14:15:19
 */
import { modalPromise } from '../../utils/modalPromise'

export async function openConfirm(config, mountedEl) {
  const Dialog = (await import(`./${config.type}.vue`)).default
  return modalPromise(Dialog, config, mountedEl)()
}
