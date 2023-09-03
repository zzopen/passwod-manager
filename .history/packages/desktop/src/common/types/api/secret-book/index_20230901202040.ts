declare namespace ZZ {
  namespace API {
    /**** 账号 ****/
    interface SecretBook {
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
    }

    type SecretBooks = SecretBook[]
  }
}
