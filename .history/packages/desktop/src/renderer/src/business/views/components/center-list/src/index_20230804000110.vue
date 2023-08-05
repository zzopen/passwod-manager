<script setup lang="ts">
import { useEventStore } from '@/stores'
defineOptions({
  name: 'CenterList',
  inheritAttrs: false
})

const eventStore = useEventStore()
const onClick = () => {}
</script>

<template>
  <div class="center-list">
    <a-button type="primary" @click="onClick">点我</a-button>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
