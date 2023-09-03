import {
  categoryTreeListAction,
  getCategoryMenuTreeList,
  buildMenuTree
} from './category-tree-list'
export type { CategoryTreeListRequest } from './category-tree-list'

import { categoryListAction, buildMenuList } from './category-list'
export type { CategoryListRequest } from './category-list'

import { createCategoryAction } from './create-category'
export type { CreateCategoryRequest } from './create-category'

export const secret_category = {
  getCategoryMenuTreeList,
  categoryTreeListAction,
  buildMenuTree,
  categoryListAction,
  buildMenuList,
  createCategoryAction
}
