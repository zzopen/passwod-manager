<script setup lang="ts">
import { CSSProperties } from 'vue'

defineOptions({
  name: 'LayoutRight',
  inheritAttrs: false
})

const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9'
}

const siderStyle: CSSProperties = {
  textAlign: 'center',
  height: '100%',
  color: '#fff',
  backgroundColor: '#3ba0e9'
}
</script>

<template>
  <div class="layout-right">
    <a-layout>
      <a-layout-sider :style="siderStyle">Sider</a-layout-sider>
      <a-layout>
        <a-layout-content :style="contentStyle">Content</a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
