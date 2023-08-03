const modalProps = () => ({
  title: { type: String, default: '' },
  width: { type: [String, Number], default: 400 },
  open: { type: Boolean, default: false },
  okText: { type: String, default: '确定' },
  cancelText: { type: String, default: '取消' },
  closable: { type: Boolean, default: true },
  onOk: Function as PropType<(e: MouseEvent) => void>,
  onCancel: Function as PropType<(e: MouseEvent) => void>
})
type ModalProps = VueExtractFnPropsType<typeof modalProps>

export { type ModalProps, modalProps }
