declare namespace ZZ {
  namespace API {
    /**** 分类 ****/
    interface SecretCategory {
      id: string
      pid: string
      name: string
      children?: SecretCategorys
      createdAt?: string
      updatedAt?: string
      dataUpdatedAt?: string
      parentName?: string
    }

    type SecretCategorys = SecretCategory[]
  }
}
