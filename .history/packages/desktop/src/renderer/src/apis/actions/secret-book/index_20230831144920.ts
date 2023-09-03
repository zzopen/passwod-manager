import { getListBySecretCategoryIdAction } from './get-list-by-category-id'
export type { GetListBySecretCategoryIdRequest } from './get-list-by-category-id'

import { secretBookDetailAction } from './secret-book-detail'
export type { SecretBookDetailRequest } from './secret-book-detail'

import { secretBookUpdateAction } from './secret-book-update'
export type { SecretBookUpdateRequest } from './secret-book-update'

export const secretBook = {
  getListBySecretCategoryIdAction,
  secretBookDetailAction,
  secretBookUpdateAction
}
