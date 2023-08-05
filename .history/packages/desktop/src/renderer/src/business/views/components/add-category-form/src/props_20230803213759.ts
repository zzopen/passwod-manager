interface FormState {
  website: string
  account: string
  password: string
}

const addCategoryFormProps = () => ({
  formState: { type: Object as PropType<FormState>, default: () => {} }
})
type AddCategoryFormProps = VueExtractFnPropsType<typeof addCategoryFormProps>

export { type AddCategoryFormProps, addCategoryFormProps }
