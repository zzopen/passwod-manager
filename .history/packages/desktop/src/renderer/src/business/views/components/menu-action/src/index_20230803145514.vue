<script setup lang="ts">
import { h, PlusOutlined } from '@/business/utils'

defineOptions({
  name: 'MenuAction',
  inheritAttrs: false
})

const emit = defineEmits<{
  (e: 'click-plus'): void
}>()

const onBtnClick = (e: Event) => {
  console.log('e:', e)
  emit('click-plus')
}
</script>

<template>
  <div class="menu-action">
    <div>分类</div>
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
@import './index.scss';
</style>
