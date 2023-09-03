<script lang="ts" setup>
defineOptions({ name: 'SecretBookAction', inheritAttrs: false })
</script>

<template>
  <div class="center-footer">
    <a-empty
      image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
      :image-style="{
        height: '60px'
      }"
    >
      <template #description>
        <span>
          Customize
          <a href="#api">Description</a>
        </span>
      </template>
      <a-button type="primary">Create Now</a-button>
    </a-empty>
  </div>
</template>

<style lang="scss" scoped></style>
