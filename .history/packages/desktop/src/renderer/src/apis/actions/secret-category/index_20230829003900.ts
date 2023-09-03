import {
  categoryTreeListAction,
  getCategoryMenuTreeList,
  buildMenuTree
} from './category-tree-list'
export type { CategoryTreeListRequest } from './category-tree-list'

import { categoryListAction, buildMenuList } from './category-list'
export type { CategoryListRequest } from './category-list'

export const category = {
  getCategoryMenuTreeList,
  categoryTreeListAction,
  buildMenuTree,
  categoryListAction,
  buildMenuList
}
