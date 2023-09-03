import {
  EVENT_CLICK_SECRET_CATEGORY_MENU_ITEM,
  EVENT_OPEN_CREATE_SECRET_CATEGORY_MODAL,
  EVENT_CLICK_SECRET_BOOK_LIST_ITEM
} from '../modules'

export type Events = {
  [EVENT_CLICK_SECRET_CATEGORY_MENU_ITEM]: { secret_category_id: string }
  [EVENT_OPEN_CREATE_SECRET_CATEGORY_MODAL]: unknown

  // openAddCategoryModal: unknown
  refreshSecretBookDetailPage: unknown
  clickSecretCategoryMenuItem: unknown // 点击分类菜单项
}
