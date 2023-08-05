<script setup lang="ts">
import type { MenuProps, ItemType, CSSProperties } from '@renderer/share'
import { getMenuItem } from '@renderer/share'

defineOptions({
  name: 'CategoryMenu',
  inheritAttrs: false
})

const selectedKeys = ref<string[]>(['1'])
const openKeys = ref<string[]>(['sub1'])

interface CategoryItem {
  title: string
  pid: string
  id: string
  children?: CategoryItem[]
}

const categoryList: CategoryItem[] = [
  {
    title: '分类1',
    pid: '0',
    id: '1',
    children: [
      {
        title: '分类2',
        pid: '1',
        id: '2',
        children: [
          {
            title: '分类21',
            pid: '2',
            id: '3'
          },
          {
            title: '分类22',
            pid: '2',
            id: '4'
          }
        ]
      },
      {
        title: '分类3',
        pid: '0',
        id: '5'
      }
    ]
  }
]

function buildMenu(data: CategoryItem[]): ItemType[] {
  const res: ItemType[] = []
  function traverseTree(item: CategoryItem): ItemType {
    let children: ItemType[] | undefined = []

    if (item.children) {
      for (const v of item.children) {
        children.push(traverseTree(v))
      }
    }

    if (children.length <= 0) {
      children = undefined
    }

    return getMenuItem(item.title, item.id, null, children)!
  }

  for (const item of data) {
    res.push(traverseTree(item))
  }

  return res
}

const ss = buildMenu(categoryList)
console.log('ss:', ss)
const items: ItemType[] = reactive(ss)

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
@import './index.scss';
</style>
@renderer/shared@renderer/shared
