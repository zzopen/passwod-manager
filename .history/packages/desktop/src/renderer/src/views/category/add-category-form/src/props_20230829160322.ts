interface FormState {
  name: string
  pid: string
}

const defaultFormState: FormState = {
  name: '',
  pid: ''
}

const addCategoryFormProps = () => {
  return {
    formState: {
      type: Object as PropType<FormState>,
      default() {
        return { ...defaultFormState }
      }
    }
  }
}
type AddCategoryFormProps = Partial<ExtractPropTypes<ReturnType<typeof modalProps>>>

export { type AddCategoryFormProps, type FormState, addCategoryFormProps, defaultFormState }
