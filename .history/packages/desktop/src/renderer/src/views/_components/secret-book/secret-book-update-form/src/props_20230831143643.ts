import { ExtractPropTypes } from 'vue'

export interface DataSource {
  title: string
  website: string
  username: string
  password: string
  mobile?: string
  email?: string
  remark?: string
  secretCategoryId?: string
}

export const defaultDataSource: DataSource = {
  title: '',
  website: '',
  username: '',
  password: ''
}

export const updateAccountFormProps = () => ({
  dataSource: {
    type: Object as PropType<DataSource>,
    default() {
      return { ...defaultDataSource }
    }
  }
})

export type UpdateAccountFormProps = Partial<
  ExtractPropTypes<ReturnType<typeof updateAccountFormProps>>
>