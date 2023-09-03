import { ExtractPropTypes } from 'vue'

export interface DataSource {
  name: string
  pid: string | undefined
}

export const defaultDataSource: DataSource = {
  name: '',
  pid: undefined
}

export const addCategoryFormProps = () => ({
  dataSource: {
    type: Object as PropType<DataSource>,
    default() {
      return { ...defaultDataSource }
    }
  }
})

export type AddCategoryFormProps = Partial<
  ExtractPropTypes<ReturnType<typeof addCategoryFormProps>>
>
