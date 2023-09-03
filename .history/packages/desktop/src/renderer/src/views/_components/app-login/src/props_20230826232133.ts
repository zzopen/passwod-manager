import { ExtractPropTypes } from 'vue'

export const loginProps = () => {
  return {}
}

export type LoginProps = Partial<ExtractPropTypes<ReturnType<typeof loginProps>>>
