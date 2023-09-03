import type { FormSchema } from './props'
export const defaultFormSchema = (): Omit<FormSchema, 'name' | 'ele'> => {
  return {
    labelAlign: 'right'
  }
}
