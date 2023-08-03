<script setup lang="ts">
import { h, PlusOutlined } from '@/business/utils'

defineOptions({
  name: 'MenuAction',
  inheritAttrs: false
})

const emit = defineEmits<{
  (e: 'click-plus', event: Event): void
}>()

const onBtnClick = (e: Event) => {
  emit('click-plus', e)
}
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
@import './index.scss';
</style>
