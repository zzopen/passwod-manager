import {
  getSecretCategoryTreeListAction,
  getCategoryMenuTreeList,
  buildMenuTree
} from './category-tree-list'
export type { ArpSecretCategoryTreeList } from './category-tree-list'

import { getSecretCategoryListAction, buildMenuList } from './category-list'
export type { ArpSecretCategoryList } from './category-list'

import { createSecretCategoryAction } from './create-category'
export type { ArpCreateSecretCategory } from './create-category'

import { deleteSecretCategoryAction } from './delete-secret-category'
export type { ArpDeleteSecretBook } from './delete-secret-category'

export const secretCategory = {
  getCategoryMenuTreeList,
  getSecretCategoryTreeListAction,
  buildMenuTree,
  getSecretCategoryListAction,
  buildMenuList,
  createSecretCategoryAction,
  deleteSecretCategoryAction
}
