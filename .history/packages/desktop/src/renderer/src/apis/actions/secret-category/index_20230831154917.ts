import {
  categoryTreeListAction,
  getCategoryMenuTreeList,
  buildMenuTree
} from './category-tree-list'
export type { CategoryTreeListRequest } from './category-tree-list'

import { categoryListAction, buildMenuList } from './category-list'
export type { CategoryListRequest } from './category-list'

import { createSecretCategoryAction } from './create-category'
export type { CreateSecretCategoryRequest } from './create-category'

export fbuildCategorySelectOptions(data: ZZ.API.SecretCategorys): ZZ.API.SelectOptions {
      if (!data || data.length <= 0) {
        return []
      }

      const res: ZZ.API.SelectOptions = []
      for (const item of data) {
        const temp: ZZ.API.SelectOption = {
          value: item.id,
          label: item.name
        }

        res.push(temp)
      }

      return res
    }

export const secretCategory = {
  getCategoryMenuTreeList,
  categoryTreeListAction,
  buildMenuTree,
  categoryListAction,
  buildMenuList,
  createSecretCategoryAction
}
