<script setup lang="ts">
import { h, PlusOutlined } from '@/business/utils'

defineOptions({
  name: 'MenuAction',
  inheritAttrs: false
})

const onBtnClick = (event) => {}
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
