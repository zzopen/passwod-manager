import { ExtractPropTypes } from 'vue'

export const copyProps = () => ({
  text: { type: String, default: '' }
})

export type CopyProps = Partial<ExtractPropTypes<ReturnType<typeof copyProps>>>
