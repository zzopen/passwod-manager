import { ExtractPropTypes } from 'vue'

export interface DataSource {
  name: string
  pid: string | undefined
}

export const defaultFormState: FormState = {
  name: '',
  pid: undefined
}

export const addCategoryFormProps = () => ({
  dataSource: {
    type: Object as PropType<FormState>,
    default() {
      return { ...defaultFormState }
    }
  }
})

export type AddCategoryFormProps = Partial<
  ExtractPropTypes<ReturnType<typeof addCategoryFormProps>>
>
