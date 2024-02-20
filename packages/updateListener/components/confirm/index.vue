<!--
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-20 09:46:22
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-20 11:14:14
-->
<template>
  <component
    :is="confirmTypeNames[type]"
    :content="content"
    @confirm="confirm"
    @cancel="cancel"
  />
</template>

<script>
import UpdateConfirmQingmu from './qingmu'
import UpdateConfirmElement from './element'
import DefaultMixins from '../../mixins/default'

export default {
  name: 'UpdateConfirm',
  components: {
    UpdateConfirmQingmu,
    UpdateConfirmElement
  },
  mixins: [DefaultMixins],
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