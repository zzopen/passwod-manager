<template>
  <a-layout-content :class="getClass">
    <m-page-content />
  </a-layout-content>
</template>
<script setup lang="ts">

defineOptions({
  name: 'LLayoutContent'
})

const { b } = useNamespace('layout-default')
const getClass = computed(() => {
  return [b()]
})
</script>

<style scoped lang="scss">
.#{$ns-layout-content} {
  width: '100%';
  height: '100%';
}
</style>
