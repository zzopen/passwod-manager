<script lang="ts" setup>
import { useCssVar } from '@renderer/shared'
import type { MenuProps, CSSProperties,ItemType } from '@renderer/shared'
import { emitClickSecretCategoryMenuItem } from '@renderer/shared'
import { useSecretCategoryStore } from '@renderer/stores'
import { type ThemeConfig } from 'ant-design-vue/es/config-provider/context'
import type { ItemType } from '@renderer/shared'
defineOptions({ name: 'CategoryMenu', inheritAttrs: false })
const { layoutLeftBgColor } = useCssVar()
const secretCategoryStore = useSecretCategoryStore()

const state = reactive({
  dataSource:
})

onMounted(async () => {
  await secretCategoryStore.loadCategoryList()
})

const selectedKeys = ref<string[]>([])
const openKeys = ref<string[]>([])

const items = computed(() => {
  return secretCategoryStore.getSecretCategoryList
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

const onClick: MenuProps['onClick'] = ({ key }) => {
  emitClickSecretCategoryMenuItem({ secret_category_id: String(key) })
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
