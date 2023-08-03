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

const siderProps = computed(() => {
  return {
    width: businessCls.bLayoutRightSiderWidth
  }
})

const siderStyle = computed<CSSProperties>(() => {
  return {
    height: '100%',
    backgroundColor: businessCls.bLayoutRightSiderBackgroundColor
  }
})
</script>

<template>
  <a-layout class="layout-right" style="width: 100%; height: 100%">
    <a-layout-sider :style="siderStyle" v-bind="siderProps">
      <layout-center />
    </a-layout-sider>
    <a-layout style="width: 100%; height: 100%">
      <a-layout-content :style="contentStyle">
        <layout-content />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
