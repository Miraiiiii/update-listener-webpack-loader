<!--
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-19 13:42:54
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-19 13:44:20
-->
<template>
  <div class="update-confirm__mask">
    <slot />
  </div>
</template>

<style lang="scss" scoped>

.update-confirm {
  &__mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2001;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    &::after {
      content: '';
      display: inline-block;
      height: 100%;
      width: 0;
      vertical-align: middle;
    }
  }
}

</style>