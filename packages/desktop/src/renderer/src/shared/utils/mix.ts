import type { SelectOptions, SelectOption } from '@common/types'
import type { VueElement, ItemType } from '@renderer/shared/deps'

/**** ant-design-vue MenuItem *****/
export function getMenuItem(
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

export function buildDataOptions(data: any[], labelKey = 'name', valueKey = 'id'): SelectOptions {
  if (!data || data.length <= 0) {
    return []
  }

  if (!labelKey || !valueKey) {
    return []
  }

  const options: SelectOptions = []
  for (const item of data) {
    const opt: SelectOption = {
      value: item[valueKey],
      label: item[labelKey]
    }

    options.push(opt)
  }

  return options
}
