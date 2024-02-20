<!--
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-20 09:46:22
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-20 09:54:20
-->
<template>
  <component
    :is="confirmTypeNames[type]"
    :content="content"
  />
</template>

<script>
import UpdateConfirmQingmu from './qingmu'
import UpdateConfirmElement from './element'

export default {
  name: 'UpdateConfirm',
  components: {
    UpdateConfirmQingmu,
    UpdateConfirmElement
  },
  props: {
    content: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'qingmu'
    }
  },
  data() {
    return {
      confirmTypeNames: {
        qingmu: 'UpdateConfirmQingmu',
        element: 'UpdateConfirmElement'
      }
    }
  }
}

</script>