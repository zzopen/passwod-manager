import { ExtractPropTypes } from 'vue'

export const pageContentProps = {} as const

export type PageContentProps = Partial<ExtractPropTypes<ReturnType<typeof drawerProps>>><typeof pageContentProps>
