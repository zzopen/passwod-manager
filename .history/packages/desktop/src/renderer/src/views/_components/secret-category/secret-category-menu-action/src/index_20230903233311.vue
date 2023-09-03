<script lang="ts" setup>
import { h, PlusOutlined, emitOpenCreateSecretCategoryModal } from '@renderer/shared'
import type { ButtonProps, CSSProperties } from '@renderer/shared'

defineOptions({ name: 'SecretCategoryMenuAction', inheritAttrs: false })

const btnStyles: CSSProperties = {
  width: '20px',
  height: '20px'
}

const buttonProps = computed((): ButtonProps => {
  return {
    type: 'primary',
    size: 'small',
    shape: 'default',
    icon: h(PlusOutlined)
  }
})
const onClick = () => {
  emitOpenCreateSecretCategoryModal()
}
</script>

<template>
  <div class="menu-action">
    <div><span>分类</span></div>
    <div>
      <a-button :style="btnStyles" v-bind="buttonProps" @click="onClick" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-action {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
