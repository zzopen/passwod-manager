import { ExtractPropTypes, PropType } from 'vue'

export interface DataSource {
  title: string
  website: string
  username: string
  password: string
  remrk: string
  mobile: string
  email: string
}

export const defaultDataSource: DataSource = {
  title: '',
  website: '',
  username: '',
  password: ''
}

export const secretBookDetailProps = () => ({
  dataSource: {
    type: Object as PropType<DataSource>,
    default() {
      return { ...defaultDataSource }
    }
  }
})

export type SecretBookDetailProps = Partial<
  ExtractPropTypes<ReturnType<typeof secretBookDetailProps>>
>
