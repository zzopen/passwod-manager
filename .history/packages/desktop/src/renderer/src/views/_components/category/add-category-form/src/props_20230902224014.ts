import { ExtractPropTypes } from 'vue'

export interface DataSource {
  name: string
  pid?: string
}

export const defaultDataSource: DataSource = {
  pid: '',
  name: ''
}

export const addSecretCategoryFormProps = () => ({
  dataSource: {
    type: Object as PropType<DataSource>,
    default() {
      return { ...defaultDataSource }
    }
  }
})

export type AddSecretCategoryFormProps = Partial<
  ExtractPropTypes<ReturnType<typeof addSecretCategoryFormProps>>
>
