import { ExtractPropTypes } from 'vue'

export const inputProps = () => {
  return {
    open: { type: Boolean, default: false },
    with: { type: [String, Number], default: 378 },
    height: { type: [String, Number], default: 378 },
    closable: { type: Boolean, default: true },
    maskClosable: { type: Boolean, default: true },
    mask: { type: Boolean, default: true },
    title: { type: String, default: '' },
    placement: { type: String as PropType<'left' | 'right' | 'top' | 'bottom'>, default: 'right' }
  }
}

export type InputProps = Partial<ExtractPropTypes<ReturnType<typeof inputProps>>>
