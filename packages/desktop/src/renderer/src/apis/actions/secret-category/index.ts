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

import { updateSecretCategoryAction } from './update-secret-category'
export type { ArpUpdateSecretCategory } from './update-secret-category'

import { secretCategoryDetailAction } from './secret-category-detail'
export type { SecretCategoryDetailRequest } from './secret-category-detail'

export const secretCategory = {
  getCategoryMenuTreeList,
  getSecretCategoryTreeListAction,
  buildMenuTree,
  getSecretCategoryListAction,
  buildMenuList,
  createSecretCategoryAction,
  deleteSecretCategoryAction,
  updateSecretCategoryAction,
  secretCategoryDetailAction
}
