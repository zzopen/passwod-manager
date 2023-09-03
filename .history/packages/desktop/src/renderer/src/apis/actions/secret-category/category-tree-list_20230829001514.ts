import { req } from '@renderer/apis/instance'
import { API_CATEGORY_TREELIST } from './define'
import { isEmptyArray } from '@common/utils'
import { getMenuItem, SettingOutlined, type ItemType } from '@renderer/shared'

export interface CategoryTreeListRequest {
  [propName: string]: any
}

export const categoryTreeListAction = async (
  p?: CategoryTreeListRequest
): Promise<ZZ.API.Categorys> => {
  const apiDescription = Object.assign({}, API_CATEGORY_TREELIST)
  const [err, res] = await req.request<ZZ.API.Categorys>(apiDescription)
  if (!res) {
    return Promise.reject(err!.msg)
  }

  return transferCategoryTreeList(res.data)
}

function transferCategoryTreeList(data: any[]): ZZ.API.Categorys {
  if (!data || !Array.isArray(data)) {
    return []
  }

  let res: ZZ.API.Categorys = []
  if (data.length <= 0) {
    return res
  }

  res = transfer(data)
  return res
}

function transfer(items: any): ZZ.API.Categorys {
  const res: ZZ.API.Categorys = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const caetgory: ZZ.API.Category = {
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
  const data = await categoryTreeListAction()
  const data = getMockMenu()
  return buildMenu(data)
}

export function buildMenu(data: ZZ.API.Categorys): ItemType[] {
  const res: ItemType[] = []
  function traverseTree(item: ZZ.API.Category): ItemType {
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

function getMockMenu(): CategoryItem[] {
  const categoryList: ZZ.API.Categorys = [
    {
      title: '分类1',
      pid: '0',
      id: '1',
      children: [
        {
          title: '分类2',
          pid: '1',
          id: '2',
          children: [
            {
              name: '分类21',
              pid: '2',
              id: '3'
            },
            {
              name: '分类22',
              pid: '2',
              id: '4'
            }
          ]
        },
        {
          name: '分类3',
          pid: '0',
          id: '5'
        }
      ]
    }
  ]

  return categoryList
}
