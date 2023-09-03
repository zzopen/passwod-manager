// 全部的第三方依赖都从此处导入，方便管理
/**** vue *****/
import { h, VueElement } from 'vue'
import type { CSSProperties } from 'vue'

export type { CSSProperties }
export { h, VueElement }

/**** ant-design-vue *****/
import { MailOutlined, SearchOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons-vue'
import { Form, message } from 'ant-design-vue'
import type { MenuProps, ItemType, DrawerProps, SelectProps } from 'ant-design-vue'
import type { SelectValue } from 'ant-design-vue/es/select/index'

export type { MenuProps, ItemType, DrawerProps, SelectProps, SelectValue }
export { MailOutlined, SearchOutlined, PlusOutlined, SettingOutlined }
export { Form, message }

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
