<script setup lang="ts">
import type { MenuProps, ItemType, CSSProperties } from '@/business/utils'
import { h, getMenuItem, MailOutlined } from '@/business/utils'

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

const categoryList: CategoryItem = [
  {
    title: '分类1',
    pid: 0,
    id: 1,
    children: [
      {
        title: '分类2',
        pid: 1,
        id: 2,
        children: [
          {
            title: '分类21',
            pid: 2,
            id: 3
          },
          {
            title: '分类22',
            pid: 2,
            id: 4
          }
        ]
      },
      {
        title: '分类3',
        pid: 0,
        id: 5
      }
    ]
  }
]

// function tree(
//         array $array,
//         string $first,
//         string $pid,
//         string $id,
//         string $child = 'childs'
//     ): array {
//         $tree = [];
//         foreach ($array as $item) {
//             $tree[$item[$id]] = $item;
//         }
//         foreach ($tree as $item) {
//             $tree[$item[$pid]][$child][] = &$tree[$item[$id]];
//         }

//         return $tree[$first][$child] ?? [];
//     }

//     tree($array,'1','pid','id');

const f: ItemType = (data: CategoryItem[], first: string, pid: string, id: string, child: string) => {
  var map = new Map<string,>();
  for (const item of d) {
      res.push()
    }


}

const items: ItemType[] = reactive([
  getMenuItem('分类1', 'sub1', () => h(MailOutlined), [
    getMenuItem(
      'Item 1',
      'g1',
      null,
      [getMenuItem('Option 1', '1'), getMenuItem('Option 2', '2')],
      'group'
    ),
    getMenuItem(
      'Item 2',
      'g2',
      null,
      [getMenuItem('Option 3', '3'), getMenuItem('Option 4', '4')],
      'group'
    ),
    getMenuItem(
      'Item 3',
      'g3',
      null,
      [getMenuItem('Option 4', '4'), getMenuItem('Option 5', '5')],
      'group'
    )
  ])
])

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
