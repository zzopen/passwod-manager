const modalProps = () => ({
  title: { type: String, default: '' },
  width: { type: String, default: '520' },
  open: { type: Boolean, default: false },
  okText: { type: String, default: '确定' }
})
type ModalProps = VueExtractFnPropsType<typeof modalProps>

export { type ModalProps, modalProps }
