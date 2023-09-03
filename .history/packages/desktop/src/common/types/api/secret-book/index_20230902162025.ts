import { secretCategory } from '../../../../renderer/src/apis/actions/secret-category/index'
export interface SecretBook {
  id: string
  title: string
  website: string
  username: string
  password: string
  mobile: string
  email: string
  remark: string
  createdAt: string
  updatedAt: string
  dataUpdatedAt: string
  secretCategoryId: string
}

export type SecretBooks = SecretBook[]
