const modalProps = () => ({
  title: { type: String, default: '' },
  open: { type: Boolean, default: false },
  okText: { type: String, default: '' }
})
type ModalProps = VueExtractFnPropsType<typeof modalProps>

export { type ModalProps, modalProps }
