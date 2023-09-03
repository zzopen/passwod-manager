<script lang="ts" setup>
import { useCssVar } from '@renderer/shared'
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
  return categoryStore.categoryTreeList
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

const handleClick: MenuProps['onClick'] = (e) => {
  console.log('click', e)
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
        @click="handleClick"
      ></a-menu>
    </a-config-provider>
  </div>
</template>

<style lang="scss" scoped>
.category-menu {
  max-height: calc(100vh - 220px);
  min-height: 450px;
  border-bottom: 1px solid red;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>
