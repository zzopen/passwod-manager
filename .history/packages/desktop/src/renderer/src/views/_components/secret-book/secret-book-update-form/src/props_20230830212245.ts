import { ExtractPropTypes } from 'vue'

export interface DataSource {
  website: string
  account: string
  password: string
}

export const defaultFormState: DataSource = {
  website: '',
  account: '',
  password: ''
}

export const updateAccountFormProps = () => ({
  dataSource: {
    type: Object as PropType<DataSource>,
    default() {
      return { ...defaultFormState }
    }
  }
})

export type UpdateAccountFormProps = Partial<
  ExtractPropTypes<ReturnType<typeof updateAccountFormProps>>
>
