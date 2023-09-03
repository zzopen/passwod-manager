import { ExtractPropTypes } from 'vue'

export const routerViewWrapperProps = () => {}

export type RouterViewWrapperProps = Partial<
  ExtractPropTypes<ReturnType<typeof routerViewWrapperProps>>
>
