import type { VueElement } from './vue'

/**** ant-design-vue *****/
import { MailOutlined, SearchOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons-vue'
export { MailOutlined, SearchOutlined, PlusOutlined, SettingOutlined }

import { Form, message, Modal } from 'ant-design-vue'
export { Form, message }

import type { MenuProps, ItemType, DrawerProps, SelectProps, ButtonProps } from 'ant-design-vue'
import type { SelectValue } from 'ant-design-vue/es/select/index'
export type { ButtonProps, MenuProps, ItemType, DrawerProps, SelectProps, SelectValue }

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
