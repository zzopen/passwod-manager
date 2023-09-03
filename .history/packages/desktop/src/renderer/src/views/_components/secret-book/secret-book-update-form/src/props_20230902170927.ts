import { ExtractPropTypes } from 'vue'

export interface DataSource {
  id: string
  title: string
  website: string
  username: string
  password: string
  secretCategoryId: string
  mobile?: string
  email?: string
  remark?: string
}

export const defaultDataSource: DataSource = {
  id: '',
  title: '',
  website: '',
  username: '',
  password: ''
}

export const secretBookUpdateFormProps = () => ({
  dataSource: {
    type: Object as PropType<DataSource>,
    default() {
      return { ...defaultDataSource }
    }
  }
})

export type SecretBookUpdateFormProps = Partial<
  ExtractPropTypes<ReturnType<typeof secretBookUpdateFormProps>>
>
