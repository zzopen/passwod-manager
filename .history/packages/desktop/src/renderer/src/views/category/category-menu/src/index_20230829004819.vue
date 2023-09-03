<script lang="ts" setup>
import { useCssVar, getMenuItem } from '@renderer/shared'
import type { MenuProps, ItemType, CSSProperties } from '@renderer/shared'
import { useCategoryStore } from '@renderer/stores'
import { type ThemeConfig } from 'ant-design-vue/es/config-provider/context'

defineOptions({ name: 'CategoryMenu', inheritAttrs: false })

const { layoutLeftBgColor } = useCssVar()

const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.loadCategoryList()
})

const selectedKeys = ref<string[]>(['1'])
const openKeys = ref<string[]>(['sub1'])

const items = computed((): ItemType[] => {
  const groupItem: ItemType = getMenuItem(
    'Group',
    'category',
    null,
    categoryStore.categoryList,
    undefined,
    'group'
  )

  return [groupItem]
})

const menuStyle = computed<CSSProperties>(() => {
  return {
    backgroundColor: layoutLeftBgColor
    // textAlign: 'center'
  }
})

const configTheme: ThemeConfig = {
  components: {
    Menu: {
      colorPrimary: '#00b96b',
      colorItemBg: layoutLeftBgColor,
      colorSubItemBg: layoutLeftBgColor,
      colorItemBgSelected: 'red'
    }
  }
}

const onClick: MenuProps['onClick'] = (e) => {
  console.log('click', e)
}

const onSelect: MenuProps['onSelect'] = ({ item, key, selectedKeys }) => {
  console.log('item', item)
  console.log('key', key)
  console.log('selectedKeys', selectedKeys)
}
watch(openKeys, (val) => {
  console.log('openKeys', val)
})
</script>

<template>
  <div class="category-menu">
    <a-config-provider :theme="configTheme">
      <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        :style="menuStyle"
        mode="inline"
        theme="dark"
        :items="items"
        @click="onClick"
        @select="onSelect"
      ></a-menu>
    </a-config-provider>
  </div>
</template>

<style lang="scss" scoped>
.category-menu {
  min-height: 450px;
  height: calc(100vh - 220px);
  border-bottom: 1px solid red;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>
