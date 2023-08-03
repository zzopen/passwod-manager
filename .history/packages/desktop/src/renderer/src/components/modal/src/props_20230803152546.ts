const modalProps = () => ({
  title: { type: String, default: '' },
  open: { type: Boolean, default: false }
})
type ModalProps = VueExtractFnPropsType<typeof modalProps>

export { type ModalProps, modalProps }
