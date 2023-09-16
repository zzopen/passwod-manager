import { ExtractPropTypes } from 'vue'

export interface DataSource {
  format: string
  encrypt: string
  outDir: string
  fileName: string
}

export const defaultDataSource: DataSource = {
  format: 'csv',
  encrypt: '2',
  outDir: '',
  fileName: ''
}

export const appExportFormProps = () => ({
  dataSource: {
    type: Object as PropType<DataSource>,
    default() {
      return { ...defaultDataSource }
    }
  }
})

export type AppExportFormProps = Partial<ExtractPropTypes<ReturnType<typeof appExportFormProps>>>
