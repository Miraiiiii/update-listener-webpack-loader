<!--
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-19 11:59:50
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-19 14:43:43
-->
<template>
  <ConfirmMask>
    <div class="update-confirm__body">
      <div class="update-confirm__wrapper">
        <div class="update-confirm__title">
          新版上线啦！
        </div>
        <div class="update-confirm__content">
          <div class="update-confirm__desc">{{ content }}</div>
        </div>
        <div class="update-confirm__footer">
          <div class="update-confirm__btn update-confirm__btn--confirm" @click="confirm">
            立即更新
          </div>
          <div class="update-confirm__btn update-confirm__btn--cancel" @click="cancel">
            <span>暂不更新</span>
          </div>
        </div>
      </div>
    </div>
  </ConfirmMask>
</template>

<script>
import DefaultMixins from '../../mixins/default'

export default {
  name: 'UpdateConfirm',
  mixins: [DefaultMixins]
}

</script>

<style lang="scss" scoped>

.update-confirm {
  &__body {
    background: url('../../assets//updateConfirm.png') no-repeat;
    background-size: contain;
    width: 250px;
    min-height: 250px;
    vertical-align: middle;
    display: inline-flex;
    padding-top: 30px;
  }
  &__wrapper {
    width: 100%;
    padding: 25px 20px;
    text-align: left;
  }
  &__title {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
  }
  &__content {
    margin-top: 60px;
    width: 100%;
  }
  &__desc {
    color: #1a1a1a;
    font-size: 12px;
    font-weight: 400;
  }
  &__btn {
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    margin-top: 8px;
    line-height: 40px;
    &--confirm {
      color: #fff;
      background-color: #617af7;
      border-radius: 40px;
      cursor: pointer;
      &:hover {
        background-color: #4f6ae9;
      }
    }
    &--cancel {
      color: #B0B0B0;
      span {
        cursor: pointer;
        &:hover {
          color: #617af7;
        }
      }
    }
  }
}

</style>