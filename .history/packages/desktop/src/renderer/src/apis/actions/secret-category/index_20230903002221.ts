import {
  getSecretCategoryTreeListAction,
  getCategoryMenuTreeList,
  buildMenuTree
} from './category-tree-list'
export type { CategoryTreeListRequest } from './category-tree-list'

import { getSecretCategoryListAction, buildMenuList } from './category-list'
export type { ArpSecretCategoryList } from './category-list'

import { createSecretCategoryAction } from './create-category'
export type { CreateSecretCategoryRequest } from './create-category'

export const secretCategory = {
  getCategoryMenuTreeList,
  getSecretCategoryTreeListAction,
  buildMenuTree,
  getSecretCategoryListAction,
  buildMenuList,
  createSecretCategoryAction
}
