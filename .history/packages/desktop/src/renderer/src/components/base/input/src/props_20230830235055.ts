import { CSSProperties, ExtractPropTypes } from 'vue'

export interface FormInputSchema {
  placeholder?: string
  style?: CSSProperties
}

const defaultFormInputSchema = {}

export const inputProps = () => {
  return {
    value: {
      type: String,
      required: true
    },
    schema: {
      type: Object as PropType<FormInputSchema>,
      default() {
        return { ...defaultFormInputSchema }
      }
    }
  }
}

export type InputProps = Partial<ExtractPropTypes<ReturnType<typeof inputProps>>>
