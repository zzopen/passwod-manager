import { ExtractPropTypes } from 'vue'

const searchCecretBookProps = () => ({})
type CenterTopProps = Partial<ExtractPropTypes<ReturnType<typeof searchCecretBookProps>>>

export { type CenterTopProps, centerTopProps }
