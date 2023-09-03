interface FormState {
  name: string
  pid: string
}

const defaultFormState: FormState = {
  name: '',
  pid: ''
}

const addCategoryFormProps = () => ({
  formState: {
    type: Object as PropType<FormState>,
    default() {
      return { ...defaultFormState }
    }
  }
})
type AddCategoryFormProps = VueExtractFnPropsType<typeof addCategoryFormProps>

export { type AddCategoryFormProps, type FormState, addCategoryFormProps, defaultFormState }
