import { req } from '@renderer/apis/instance'
import { API_SECRET_BOOK_LIST } from './define'
import { isEmptyArray } from '@common/utils'
import { getMenuItem, SettingOutlined, type ItemType } from '@renderer/shared'

export interface GetListBySecretCategoryIdRequest {
  secret_category_id?: string
  [propName: string]: any
}

export const getListBySecretCategoryIdAction = async (
  p: GetListBySecretCategoryIdRequest
): Promise<ZZ.API.SecretBooks> => {
  const apiDescription = Object.assign({}, API_SECRET_BOOK_LIST)
  const [err, res] = await req.request<ZZ.API.SecretCategorys>(apiDescription, {
    config: { params: p }
  })
  if (!res) {
    return Promise.reject(err!.msg)
  }

  return transferCategoryList(res.data)
  // return getMockMenuList()
}

function transferCategoryList(data: any[]): ZZ.API.SecretCategorys {
  if (!data || !Array.isArray(data)) {
    return []
  }

  let res: ZZ.API.SecretCategorys = []
  if (data.length <= 0) {
    return res
  }

  res = transfer(data)
  return res
}

function transfer(items: any): ZZ.API.SecretCategorys {
  const res: ZZ.API.SecretCategorys = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const caetgory: ZZ.API.SecretCategory = {
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
  const data = await categoryListAction()
  return buildMenuList(data)
}

export function buildMenuList(data: ZZ.API.SecretCategorys): ItemType[] {
  const res: ItemType[] = []
  function traverseTree(item: ZZ.API.SecretCategory): ItemType {
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

function getMockMenuList(): ZZ.API.SecretCategorys {
  const categoryList: ZZ.API.SecretCategorys = [
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
