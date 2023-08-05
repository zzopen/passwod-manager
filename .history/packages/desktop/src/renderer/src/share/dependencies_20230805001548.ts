/**** vue *****/
import { h, VueElement } from 'vue'
import type { CSSProperties, UnwrapRef } from 'vue'

export type { CSSProperties, UnwrapRef }
export { h, VueElement }

/**** ant-design-vue *****/
import { MailOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import type { MenuProps, ItemType, DrawerProps, SelectProps } from 'ant-design-vue'
import type { SelectValue } from 'ant-design-vue/es/select/index'

export type { MenuProps, ItemType, DrawerProps, SelectProps, SelectValue }
export { MailOutlined, SearchOutlined, PlusOutlined }
export { message }

/**** ant-design-vue MenuItem *****/
function getMenuItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  title?: string,
  type?: 'group'
): ItemType {
  return {
    label,
    key,
    title,
    icon,
    children,
    type
  }
}

export { getMenuItem }

/**** vueuse *****/
import * as vueuse from '@vueuse/core'
const onKeyDown = vueuse.onKeyDown
export { onKeyDown }
