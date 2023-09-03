<script lang="ts" setup>
import { useCssVar } from '@renderer/shared'
import type { MenuProps, CSSProperties, ItemType } from '@renderer/shared'
import { emitClickSecretCategoryMenuItem } from '@renderer/shared'
import { useSecretCategoryStore } from '@renderer/stores'
import { type ThemeConfig } from 'ant-design-vue/es/config-provider/context'

defineOptions({ name: 'CategoryMenu', inheritAttrs: false })
const { layoutLeftBgColor } = useCssVar()
const secretCategoryStore = useSecretCategoryStore()

const state = reactive<{
  dataSource: ItemType[]
  selectedKeys: NonNullable<MenuProps['selectedKeys']>
  openKeys: NonNullable<MenuProps['openKeys']>
}>({
  dataSource: [],
  selectedKeys: [],
  openKeys: []
})

const menuProps = reactive<MenuProps>({
  theme: 'dark',
  mode: 'inline'
})

const menuStyle = computed<CSSProperties>(() => {
  return {
    backgroundColor: layoutLeftBgColor
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

onMounted(async () => {
  await secretCategoryStore.loadCategoryList()
  state.dataSource = secretCategoryStore.getSecretCategoryList
  if (state.dataSource.length > 0) {
    const firstItem = unref(state.dataSource)[0]
    if (firstItem && firstItem.key) {
      state.selectedKeys.push(firstItem.key)
      emitClickSecretCategoryMenuItem({ secret_category_id: String(firstItem.key) })
    }
  }
})

const onClick: MenuProps['onClick'] = ({ key }) => {
  emitClickSecretCategoryMenuItem({ secret_category_id: String(key) })
}
</script>

<template>
  <div class="category-menu">
    <a-config-provider :theme="configTheme">
      <a-menu
        v-bind="menuProps"
        v-model:selectedKeys="state.selectedKeys"
        :style="menuStyle"
        :items="state.dataSource"
        @click="onClick"
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
