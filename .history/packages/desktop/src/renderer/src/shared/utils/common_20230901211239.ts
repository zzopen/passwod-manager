import type { SelectOptions, SelectOption } from '@common/types'

export function buildDataOptions(data: any[], labelKey: string， valueKey: string): SelectOptions {
  if (!data || data.length <= 0) {
    return []
  }

  const options: SelectOptions = []
  for (const item of data) {
    const opt: SelectOption = {
      value: item.id,
      label: item.name
    }

    options.push(opt)
  }

  return options
}
