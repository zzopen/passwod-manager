import { ExtractPropTypes } from 'vue'

export const inputProps = () => {
  return {
    title: { type: String, default: '' },
    value: {
      type: String,
      required: true
    }
    // placement: { type: String as PropType<'left' | 'right' | 'top' | 'bottom'>, default: 'right' }
  }
}

export type InputProps = Partial<ExtractPropTypes<ReturnType<typeof inputProps>>>
