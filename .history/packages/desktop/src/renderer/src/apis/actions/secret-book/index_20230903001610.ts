import { getListBySecretCategoryIdAction } from './get-list-by-category-id'
export type { GetListBySecretCategoryIdRequest } from './get-list-by-category-id'

import { secretBookDetailAction } from './secret-book-detail'
export type { SecretBookDetailRequest } from './secret-book-detail'

import { updateSecretBookAction } from './update-secret-book'
export type { SecretBookUpdateRequest } from './update-secret-book'

export const secretBook = {
  getListBySecretCategoryIdAction,
  secretBookDetailAction,
  updateSecretBookAction
}
