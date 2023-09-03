import { ExtractPropTypes } from 'vue'

export interface DataSource {
  title: string
  website: string
  username: string
  password: string
  remark: string
  mobile: string
  email: string
}

export const defaultDataSource: DataSource = {
  title: '',
  website: '',
  username: '',
  password: '',
  remark: '',
  email: '',
  mobile: ''
}

export const secretBookDetailProps = () => ({
  // dataSource: {
  //   type: Object as PropType<DataSource>,
  //   default() {
  //     return { ...defaultDataSource }
  //   }
  // }
})

export type SecretBookDetailProps = Partial<
  ExtractPropTypes<ReturnType<typeof secretBookDetailProps>>
>
