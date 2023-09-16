import {
  EVENT_SEARCH_SECRET_BOOK_DETAIL,
  EVENT_OPEN_UPDATE_SECRET_BOOK_DRAWER,
  EVENT_LOAD_SECRET_BOOK_LIST,
  EVENT_OPEN_CREATE_SECRET_BOOK_DRAWER
} from './secret-book/event'

import type { ArpGetSecretBookList } from '@renderer/apis'

import {
  EVENT_CLICK_SECRET_CATEGORY_MENU_ITEM,
  EVENT_OPEN_CREATE_SECRET_CATEGORY_MODAL,
  EVENT_LOAD_SECRET_CATEGORY_MENU_LIST,
  EVENT_OPEN_SECRET_CATEGORY_MENU_CONTEXTMENU,
  EVENT_OPEN_UPDATE_SECRET_CATEGORY_MODAL
} from './secret-category/event'

import {
  EVENT_REFRESH_HOME_PAGE,
  EVENT_OPEN_EXPORT_DATA_MODAL,
  EVENT_OPEN_IMPORT_DATA_MODAL
} from './mix/event'

export type Events = {
  // mix
  [EVENT_REFRESH_HOME_PAGE]: { secret_category_id?: string } | undefined
  [EVENT_OPEN_EXPORT_DATA_MODAL]: unknown
  [EVENT_OPEN_IMPORT_DATA_MODAL]: unknown
  // secret-category
  [EVENT_CLICK_SECRET_CATEGORY_MENU_ITEM]: { secret_category_id: string }
  [EVENT_OPEN_CREATE_SECRET_CATEGORY_MODAL]: unknown
  [EVENT_LOAD_SECRET_CATEGORY_MENU_LIST]: unknown
  [EVENT_OPEN_SECRET_CATEGORY_MENU_CONTEXTMENU]: {
    secret_category_id: string
    secret_category_name: string
    x: number
    y: number
  }
  [EVENT_OPEN_UPDATE_SECRET_CATEGORY_MODAL]: { secret_category_id: string }
  // secret-book
  [EVENT_SEARCH_SECRET_BOOK_DETAIL]: { secret_book_id: string }
  [EVENT_OPEN_UPDATE_SECRET_BOOK_DRAWER]: { secret_book_id: string }
  [EVENT_LOAD_SECRET_BOOK_LIST]: ArpGetSecretBookList
  [EVENT_OPEN_CREATE_SECRET_BOOK_DRAWER]: { secret_category_id?: string }
}
