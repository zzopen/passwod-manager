import { getSecretBookListAction } from './secret-book-list'
export type { ArpGetSecretBookList } from './secret-book-list'

import { secretBookDetailAction } from './secret-book-detail'
export type { SecretBookDetailRequest } from './secret-book-detail'

import { updateSecretBookAction } from './update-secret-book'
export type { ArpUpdateSecretBook } from './update-secret-book'

import { deleteSecretBookAction } from './delete-secret-book'
export type { ArpDeleteSecretBook } from './delete-secret-book'

export const secretBook = {
  getSecretBookListAction,
  secretBookDetailAction,
  updateSecretBookAction,
  deleteSecretBookAction
}
