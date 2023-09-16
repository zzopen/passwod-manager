import { ExtractPropTypes } from 'vue'

export interface DataSource {
  id: string
  name: string
  pid?: string
}

export const defaultDataSource: DataSource = {
  id: '',
  pid: undefined,
  name: ''
}

export const updateSecretCategoryFormProps = () => ({
  dataSource: {
    type: Object as PropType<DataSource>,
    default() {
      return { ...defaultDataSource }
    }
  }
})

export type UpdateSecretCategoryFormProps = Partial<
  ExtractPropTypes<ReturnType<typeof updateSecretCategoryFormProps>>
>
