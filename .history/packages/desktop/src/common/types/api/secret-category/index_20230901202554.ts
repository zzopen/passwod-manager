/**** 分类 ****/
export interface SecretCategory {
  id: string
  pid: string
  name: string
  children?: SecretCategorys
  createdAt?: string
  updatedAt?: string
  dataUpdatedAt?: string
  parentName?: string
}

export type SecretCategorys = SecretCategory[]
