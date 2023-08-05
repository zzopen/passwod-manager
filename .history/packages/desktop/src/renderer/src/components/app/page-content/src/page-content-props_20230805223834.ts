import { ExtractPropTypes } from 'vue'

export const pageContentProps = {} as const

export type PageContentProps = ExtractPropTypes<typeof pageContentProps>
