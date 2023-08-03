<script setup lang="ts">
import { h, CSSProperties } from 'vue'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue'
import type { MenuProps, ItemType } from 'ant-design-vue'
import { getMenuItem } from '@/business/utils'

defineOptions({
  name: 'CategoryMenu',
  inheritAttrs: false
})

const selectedKeys = ref<string[]>(['1'])
const openKeys = ref<string[]>(['sub1'])

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
    )
  ]),

  getMenuItem('Navigation Two', 'sub2', () => h(AppstoreOutlined), [
    getMenuItem('Option 5', '5'),
    getMenuItem('Option 6', '6'),
    getMenuItem('Submenu', 'sub3', null, [
      getMenuItem('Option 7', '7'),
      getMenuItem('Option 8', '8')
    ])
  ])
])

const handleClick: MenuProps['onClick'] = (e) => {
  console.log('click', e)
}

watch(openKeys, (val) => {
  console.log('openKeys', val)
})

const menuStyle: CSSProperties = {
  backgroundColor: '#3f4361',
  color: 'white'
}
</script>

<template>
  <div class="category-menu">
    <a-menu
      id="dddddd"
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
