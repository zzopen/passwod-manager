import { VueElement } from 'vue'
import { ItemType } from 'ant-design-vue'
import { MailOutlined } from '@ant-design/icons-vue'

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
  } as ItemType
}

export { getMenuItem }
export { MailOutlined }
