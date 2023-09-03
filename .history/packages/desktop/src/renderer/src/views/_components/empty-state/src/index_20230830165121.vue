<script lang="ts" setup>
defineOptions({ name: 'EmptyState', inheritAttrs: false })
</script>

<template>
  <div class="empty-state">
    <a-empty
      image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
      :image-style="{
        height: '60px'
      }"
    >
      <template #description>
        <span> 暂无数据 </span>
      </template>
    </a-empty>
  </div>
</template>

<style lang="scss" scoped></style>
