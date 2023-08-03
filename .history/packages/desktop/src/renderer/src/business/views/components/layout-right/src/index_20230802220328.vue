<script setup lang="ts">
import { CSSProperties } from 'vue'
import LayoutCenter from '@/business/views/components/layout-center'
import LayoutContent from '@/business/views/components/layout-content'
import { businessCls } from '@/styles/module'

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
  height: '100%',
  width: businessCls.bLayoutRightSiderWidth,
  backgroundColor: '#ffffff'
}
</script>

<template>
  <a-layout class="layout-right">
    <a-layout-sider :style="siderStyle">
      <layout-center />
    </a-layout-sider>
    <a-layout>
      <a-layout-content :style="contentStyle"> <layout-content /></a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
