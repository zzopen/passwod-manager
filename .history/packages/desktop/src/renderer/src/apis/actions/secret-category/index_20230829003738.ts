import { categoryTreeListAction, getCategoryMenuList, buildMenu } from './category-tree-list'
export type { CategoryTreeListRequest } from './category-tree-list'

import { categoryListAction, buildMenuList } from './category-list'
export type { CategoryTreeListRequest } from './category-tree-list'

export const category = { getCategoryMenuList, categoryTreeListAction, buildMenu }
