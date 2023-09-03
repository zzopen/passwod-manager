import { ExtractPropTypes } from 'vue'

export interface FormState {
  website: string
  account: string
  password: string
}

export const defaultFormState: FormState = {
  website: '',
  account: '',
  password: ''
}

export const updateAccountFormProps = () => ({
  formState: {
    type: Object as PropType<FormState>,
    default() {
      return { ...defaultFormState }
    }
  }
})

export type UpdateAccountFormProps = Partial<
  ExtractPropTypes<ReturnType<typeof updateAccountFormProps>>
>
