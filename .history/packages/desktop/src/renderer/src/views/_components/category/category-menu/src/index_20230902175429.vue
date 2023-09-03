<script lang="ts" setup>
import { useCssVar } from '@renderer/shared'
import type { MenuProps, CSSProperties, ItemType, MenuProps } from '@renderer/shared'
import { emitClickSecretCategoryMenuItem } from '@renderer/shared'
import { useSecretCategoryStore } from '@renderer/stores'
import { type ThemeConfig } from 'ant-design-vue/es/config-provider/context'

defineOptions({ name: 'CategoryMenu', inheritAttrs: false })
const { layoutLeftBgColor } = useCssVar()
const secretCategoryStore = useSecretCategoryStore()

const state = reactive<{ dataSource: ItemType[]; selectedKeys: string[]; openKeys: string[] }>({
  dataSource: [],
  selectedKeys: [],
  openKeys: []
})

const menuStyle = computed<CSSProperties>(() => {
  return {
    backgroundColor: layoutLeftBgColor
  }
})

const menuProps = reactive<MenuProps>({
  theme: 'dark',
  mode: 'inline'
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
})

watch(openKeys, (val) => {
  console.log('openKeys', val)
})

const onClick: MenuProps['onClick'] = ({ key }) => {
  emitClickSecretCategoryMenuItem({ secret_category_id: String(key) })
}
</script>

<template>
  <div class="category-menu">
    <a-config-provider :theme="configTheme">
      <a-menu
        v-model:openKeys="state.openKeys"
        v-model:selectedKeys="state.selectedKeys"
        :style="menuStyle"
        mode="inline"
        theme="dark"
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
