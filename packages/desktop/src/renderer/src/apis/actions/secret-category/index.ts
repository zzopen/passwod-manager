import {
  getSecretCategoryTreeListAction,
  getCategoryMenuTreeList,
  buildMenuTree
} from './secret-category-tree-list'
export type { ArpSecretCategoryTreeList } from './secret-category-tree-list'

import { getSecretCategoryListAction, buildMenuList } from './secret-category-list'
export type { ArpSecretCategoryList } from './secret-category-list'

import { createSecretCategoryAction } from './create-secret-category'
export type { ArpCreateSecretCategory } from './create-secret-category'

import { deleteSecretCategoryAction } from './delete-secret-category'
export type { ArpDeleteSecretCategory } from './delete-secret-category'

export const secretCategory = {
  getCategoryMenuTreeList,
  getSecretCategoryTreeListAction,
  buildMenuTree,
  getSecretCategoryListAction,
  buildMenuList,
  createSecretCategoryAction,
  deleteSecretCategoryAction
}
