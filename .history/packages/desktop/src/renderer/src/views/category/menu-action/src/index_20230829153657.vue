<script lang="ts" setup>
import { h, PlusOutlined } from '@renderer/shared'
import type { CSSProperties } from '@renderer/shared'
import { useEventStore } from '@renderer/stores'

defineOptions({ name: 'MenuAction', inheritAttrs: false })

const eventStore = useEventStore()

const onClickBtn = () => {
  eventStore.openAddCategoryModal()
}

const btnStyles: CSSProperties = {
  width: '20px',
  height: '20px'
}
</script>

<template>
  <div class="menu-action">
    <div><span>分类</span></div>
    <div>
      <a-button
        :style="btnStyles"
        type="primary"
        size="small"
        shape="default"
        :icon="h(PlusOutlined)"
        @click="onClickBtn"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-action {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
