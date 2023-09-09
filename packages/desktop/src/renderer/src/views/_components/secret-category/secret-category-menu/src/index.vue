<script lang="ts" setup>
import { useCssVar } from '@renderer/shared'
import type { ThemeConfig, MenuProps, CSSProperties, ItemType } from '@renderer/shared/deps'
import {
  emitLoadSecretBookList,
  listenerLoadSecretCategoryMenuList,
  listenerRefreshHomePage
} from '@renderer/shared'
import { useSecretCategoryStore, useSecretBookStore } from '@renderer/stores'

defineOptions({ name: 'SecretCategoryMenu', inheritAttrs: false })
const { layoutLeftBgColor } = useCssVar()
const secretCategoryStore = useSecretCategoryStore()
const secretBookStore = useSecretBookStore()

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

const ready = async (p?: { secret_category_id?: string }) => {
  await secretCategoryStore.loadCategoryList()
  state.dataSource = secretCategoryStore.getSecretCategoryList

  let menuItem: ItemType = null
  if (p && p.secret_category_id) {
    for (const item of state.dataSource) {
      if (item && item.key == p.secret_category_id) {
        menuItem = item
        break
      }
    }
  } else {
    // 默认选中第一个
    if (state.dataSource.length > 0) {
      menuItem = unref(state.dataSource)[0]
    }
  }

  if (menuItem && menuItem.key) {
    state.selectedKeys.push(menuItem.key)
    secretBookStore.secretBookSearch.secret_category_id = String(menuItem.key)
    emitLoadBookList()
  }
}

onMounted(async () => {
  await ready()
})

const onClick: MenuProps['onClick'] = ({ key }) => {
  secretBookStore.secretBookSearch.secret_category_id = String(key)
  emitLoadBookList()
}

const emitLoadBookList = () => {
  emitLoadSecretBookList(secretBookStore.secretBookSearch)
}

listenerLoadSecretCategoryMenuList(ready)
listenerRefreshHomePage(ready)
</script>

<template>
  <div class="secret-category-menu">
    <a-config-provider :theme="configTheme">
      <a-menu
        v-bind="menuProps"
        v-model:selectedKeys="state.selectedKeys"
        :style="menuStyle"
        :items="state.dataSource"
        @click="onClick"
      >
      </a-menu>
    </a-config-provider>
  </div>
</template>

<style lang="scss" scoped>
.secret-category-menu {
  min-height: 450px;
  height: calc(100vh - 220px);
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>
