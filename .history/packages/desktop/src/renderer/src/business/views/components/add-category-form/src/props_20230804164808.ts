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

const addCategoryFormProps = () => ({})
type AddCategoryFormProps = VueExtractFnPropsType<typeof addCategoryFormProps>

export { type AddCategoryFormProps, addCategoryFormProps }
