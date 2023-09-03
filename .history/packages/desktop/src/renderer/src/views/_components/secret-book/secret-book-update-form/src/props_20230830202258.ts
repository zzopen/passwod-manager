import { ExtractPropTypes } from 'vue'

interface FormState {
  website: string
  account: string
  password: string
}

const defaultFormState: FormState = {
  website: '',
  account: '',
  password: ''
}

const updateAccountFormProps = () => ({
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
