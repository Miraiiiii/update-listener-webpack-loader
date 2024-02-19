/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-19 13:49:58
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-19 13:51:06
 */
import ConfirmMask from '../layout/mask.vue'

export default {
  components: {
    ConfirmMask
  },
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    confirm() {
      this.$emit('confirm')
    }
  }
}