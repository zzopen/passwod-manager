<script setup lang="ts">
import { h, CSSProperties } from 'vue'
import { MailOutlined } from '@ant-design/icons-vue'
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
