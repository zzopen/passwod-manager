import { req } from '@renderer/apis/instance'
import { API_SECRET_CATEGORY_LIST } from './define'
import { isEmptyArray } from '@common/utils'
import { getMenuItem, SettingOutlined, type ItemType } from '@renderer/shared'
import type { SecretCategorys, SecretCategory } from '@common/types'

export interface ArpSecretCategoryList {
  [propName: string]: any
}

export const getSecretCategoryListAction = async (): Promise<SecretCategorys> => {
  const apiDescription = Object.assign({}, API_SECRET_CATEGORY_LIST)
  const { data, mark } = await req.request<SecretCategorys>(apiDescription)
  if (!mark || !data) {
    return []
  }

  return transfer(data)
  // return getMockMenuList()
}

function transfer(data: any[]): SecretCategorys {
  if (!data || !Array.isArray(data)) {
    return []
  }

  let res: SecretCategorys = []
  if (data.length <= 0) {
    return res
  }

  res = _transfer(data)
  return res
}

function _transfer(items: any): SecretCategorys {
  const res: SecretCategorys = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const caetgory: SecretCategory = {
      id: item.id ?? '',
      pid: item.pid ?? '',
      name: item.name ?? item.name,
      createdAt: item.created_at ?? '',
      updatedAt: item.updated_at ?? '',
      dataUpdatedAt: item.data_updated_at ?? '',
      children: []
    }

    if (item.children && !isEmptyArray(item)) {
      caetgory.children = transfer(item.children)
    }

    res.push(caetgory)
  }

  return res
}

export async function getCategoryMenuList(): Promise<ItemType[]> {
  const data = await getSecretCategoryListAction()
  return buildMenuList(data)
}

export function buildMenuList(data: SecretCategorys): ItemType[] {
  const res: ItemType[] = []
  function traverseTree(item: SecretCategory): ItemType {
    let children: ItemType[] | undefined = []

    if (item.children) {
      for (const v of item.children) {
        children.push(traverseTree(v))
      }
    }

    if (children.length <= 0) {
      children = undefined
    }

    return getMenuItem(item.name, item.id, h(SettingOutlined), children)!
  }

  for (const item of data) {
    res.push(traverseTree(item))
  }

  return res
}

function getMockMenuList(): SecretCategorys {
  const categoryList: SecretCategorys = [
    {
      name: '分类1',
      pid: '0',
      id: '1'
    },
    {
      name: '分类2',
      pid: '1',
      id: '2'
    },
    {
      name: '分类21',
      pid: '2',
      id: '3'
    },
    {
      name: '分类22',
      pid: '2',
      id: '4'
    },
    {
      name: '分类3',
      pid: '1',
      id: '5'
    }
  ]

  return categoryList
}
