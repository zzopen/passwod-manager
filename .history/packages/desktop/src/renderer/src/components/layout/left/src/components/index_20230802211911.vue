<template>
  <m-layout-sider :style="layoutSiderStyle">
    <b-layout-left />
  </m-layout-sider>
</template>

<script setup lang="ts">
import BLayoutLeft from '@/business/views/components/layout-left'
import { useCls } from '@/composables'
import { globalCls } from '@/styles/module'
import { CSSProperties } from 'vue'

defineOptions({
  name: 'LayoutLeft'
})

const layoutSiderStyle: CSSProperties = {
  color: '#fff',
  backgroundColor: '#3f4361'
}
</script>

<style scoped lang="scss"></style>
