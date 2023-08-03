const modalProps = () => ({
  title: { type: String, default: '' }
})
type ModalProps = VueExtractFnPropsType<typeof modalProps>

export { type ModalProps, modalProps }
