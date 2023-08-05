interface FormState {
  website: string
  account: string
  password: string
}

const addCategoryFormProps = () => ({
  formState: { type: Object, default: () => {} }
})
type AddCategoryFormProps = VueExtractFnPropsType<typeof addCategoryFormProps>

export { type AddCategoryFormProps, addCategoryFormProps }
