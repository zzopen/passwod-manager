import { ExtractPropTypes } from 'vue'

export interface FormState {
  name: string
  pid: string | undefined
}

export const defaultFormState: FormState = {
  name: '',
  pid: undefined
}

export const addCategoryFormProps = () => {
  return {
    formState: {
      type: Object as PropType<FormState>,
      default() {
        return { ...defaultFormState }
      }
    }
  }
}

export type AddCategoryFormProps = Partial<
  ExtractPropTypes<ReturnType<typeof addCategoryFormProps>>
>
