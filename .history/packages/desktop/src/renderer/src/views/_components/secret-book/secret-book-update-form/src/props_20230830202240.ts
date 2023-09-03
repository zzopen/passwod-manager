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
type UpdateAccountFormProps = VueExtractFnPropsType<typeof updateAccountFormProps>

export type UpdateAccountDrawerProps = Partial<
  ExtractPropTypes<ReturnType<typeof updateAccountDrawerProps>>
>
