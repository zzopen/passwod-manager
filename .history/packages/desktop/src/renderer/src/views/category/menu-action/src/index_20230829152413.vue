<script lang="ts" setup>
import { h, PlusOutlined } from '@renderer/shared'
import type { CSSProperties } from '@renderer/shared'

defineOptions({
  name: 'MenuAction',
  inheritAttrs: false
})

const emit = defineEmits<{
  (e: 'do-action', event: Event): void
}>()

const onBtnClick = (e: Event) => {
  emit('do-action', e)
}

const plusBtnStyles: CSSProperties = {}
</script>

<template>
  <div class="menu-action">
    <div><span>分类</span></div>
    <div>
      <a-button
        style="width: 20px; height: 20px"
        type="primary"
        size="small"
        shape="default"
        :icon="h(PlusOutlined)"
        @click="onBtnClick"
      />
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
