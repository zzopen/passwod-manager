import { ExtractPropTypes } from 'vue'

export const inputProps = () => {
  return {
    title: { type: String, default: '' },
    model: {
      type: Object as any,
      required: true
    }
    // placement: { type: String as PropType<'left' | 'right' | 'top' | 'bottom'>, default: 'right' }
  }
}

export type InputProps = Partial<ExtractPropTypes<ReturnType<typeof inputProps>>>
