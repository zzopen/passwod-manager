declare namespace PasswordManager {
  namespace Api {
    /**** 账号 ****/
    interface Account {
      id: string
      website: string
      account: string
      password: string
      mobile: string
      email: string
      remark: string
      createdAt: string
      updatedAt: string
      dataUpdatedAt: string
    }

    type AccountList = Account[]
  }
}
