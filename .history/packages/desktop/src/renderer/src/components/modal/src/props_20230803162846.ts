const modalProps = () => ({
  title: { type: String, default: '' },
  width: { type: String, default: '520' },
  open: { type: Boolean, default: false },
  okText: { type: String, default: '确定' },
  cancelText: { type: String, default: '取消' },
  closable: { type: Boolean, default: true }
})
type ModalProps = VueExtractFnPropsType<typeof modalProps>

export { type ModalProps, modalProps }
