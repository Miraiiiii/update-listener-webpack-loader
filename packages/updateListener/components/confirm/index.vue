<template>
  <div class="update-confirm">
    <div class="update-confirm__wrapper">
      <div class="update-confirm__header">
        <div class="update-confirm__title">提示</div>
        <div class="update-confirm__close" @click="cancel">
          &times;
        </div>
      </div>
      <div class="update-confirm__content">
        <div class="update-confirm__desc">{{ content }}</div>
      </div>
      <div class="update-confirm__btns">
        <div class="update-confirm__btn update-confirm__btn--default" @click="cancel">取消</div>
        <div class="update-confirm__btn update-confirm__btn--primary" @click="confirm">确定</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UpdateConfirm',
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

</script>

<style lang="scss" scoped>

.update-confirm {
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
  &__wrapper {
    vertical-align: middle;
    width: 420px;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    font-size: 18px;
    text-align: left;
    overflow: hidden;
    padding-bottom: 10px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    padding: 15px 15px 10px;
  }
  &__title {
    flex: 1;
    font-size: 18px;
    line-height: 1;
    color: #343b53;
  }
  &__close {
    font-size: 16px;
    cursor: pointer;
  }
  &__content {
    padding: 10px 15px;
    color: #6c7182;
    font-size: 14px;
  }
  &__desc {
    word-break: break-all;
    padding: 0 12px;
  }
  &__btns {
    padding: 5px 15px 0;
    text-align: right;
    .update-confirm__btn:nth-of-type(n+1) {
      margin-left: 10px;
    }
  }
  &__btn {
    font-size: 14px;
    font-weight: 400;
    padding: 9px 15px;
    border-color: #e5e6e8;
    display: inline-block;
    cursor: pointer;
    border-radius: 4px;
    line-height: 1;
    border: 1px solid #dcdfe6;
    transition: .1s;
    &--default {
      background: #fff;
      color: #a3aac0;
      &:hover {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
      }
    }
    &--primary {
      background: #617af7;
      color: #fff;
      &:hover {
        background: #66b1ff;
        border-color: #66b1ff;
      }
    }
  }
}

</style>
