import {
  categoryTreeListAction,
  getCategoryMenuTreeList,
  buildMenuTree
} from './category-tree-list'
export type { CategoryTreeListRequest } from './category-tree-list'

import { getCategoryListAction, buildMenuList } from './category-list'
export type { CategoryListRequest } from './category-list'

import { createSecretCategoryAction } from './create-category'
export type { CreateSecretCategoryRequest } from './create-category'

export const secretCategory = {
  getCategoryMenuTreeList,
  categoryTreeListAction,
  buildMenuTree,
  getCategoryListAction,
  buildMenuList,
  createSecretCategoryAction
}
