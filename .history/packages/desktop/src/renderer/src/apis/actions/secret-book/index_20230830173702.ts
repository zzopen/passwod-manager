import { getListBySecretCategoryIdAction } from './get-list-by-category-id'
export type { GetListBySecretCategoryIdRequest } from './get-list-by-category-id'

import { secretBookDetailAction } from './secret-book-detail'
export type { SecretBookDetailRequest } from './secret-book-detail'
export const secretBook = { getListBySecretCategoryIdAction, secretBookDetailAction }
