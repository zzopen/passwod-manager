import { ExtractPropTypes } from 'vue'

export const pageContentProps = () => {}

export type PageContentProps = Partial<ExtractPropTypes<ReturnType<typeof pageContentProps>>>
