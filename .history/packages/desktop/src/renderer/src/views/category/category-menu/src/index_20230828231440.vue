<script lang="ts" setup>
import type { MenuProps, ItemType, CSSProperties } from '@renderer/shared'
import { useCategoryStore } from '@renderer/stores'
import { getMenuItem } from '@renderer/shared'

defineOptions({ name: 'CategoryMenu', inheritAttrs: false })

const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.loadCategoryList()
})

const selectedKeys = ref<string[]>(['1'])
const openKeys = ref<string[]>(['sub1'])

const items: ItemType[] = reactive([])

const handleClick: MenuProps['onClick'] = (e) => {
  console.log('click', e)
}

watch(openKeys, (val) => {
  console.log('openKeys', val)
})

const menuStyle = computed<CSSProperties>(() => {
  return {
    backgroundColor: '#3f4361',
    color: 'white'
  }
})
</script>

<template>
  <div class="category-menu">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      :style="menuStyle"
      mode="inline"
      :items="items"
      @click="handleClick"
    ></a-menu>
  </div>
</template>

<style lang="scss" scoped>
.category-menu {
  height: calc(100vh - 220px);
  margin-bottom: 200px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>
