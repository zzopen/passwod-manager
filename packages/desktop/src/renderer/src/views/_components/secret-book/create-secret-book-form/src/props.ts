import { ExtractPropTypes } from 'vue'
import { SelectOptions } from '@common/types'

export interface DataSource {
  title: string
  website: string
  username: string
  password: string
  secretCategoryId?: string
  mobile?: string
  email?: string
  remark?: string
}

export const defaultDataSource: DataSource = {
  title: '',
  website: '',
  username: '',
  password: '',
  secretCategoryId: undefined
}

export const createSecretBookFormProps = () => ({
  dataSource: {
    type: Object as PropType<DataSource>,
    default() {
      return { ...defaultDataSource }
    }
  },
  secretCategoryOptions: {
    type: Object as PropType<SelectOptions>,
    default() {
      return []
    }
  }
})

export type CreateSecretBookFormProps = Partial<
  ExtractPropTypes<ReturnType<typeof createSecretBookFormProps>>
>
