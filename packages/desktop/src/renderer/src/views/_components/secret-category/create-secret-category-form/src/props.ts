import { ExtractPropTypes } from 'vue'

export interface DataSource {
  name: string
  pid?: string
}

export const defaultDataSource: DataSource = {
  pid: undefined,
  name: ''
}

export const createSecretCategoryFormProps = () => ({
  dataSource: {
    type: Object as PropType<DataSource>,
    default() {
      return { ...defaultDataSource }
    }
  }
})

export type CreateSecretCategoryFormProps = Partial<
  ExtractPropTypes<ReturnType<typeof createSecretCategoryFormProps>>
>
