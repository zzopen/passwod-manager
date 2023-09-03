import { ExtractPropTypes } from 'vue'

export const secretBookDetailProps = () => ({
  title: { type: String, required: false, default: '' },
  website: { type: String, required: false, default: '' },
  account: { type: String, required: false, default: '' },
  password: { type: String, required: false, default: '' },
  remrk: { type: String, required: false, default: '' },
  mobile: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' }
})

export type SecretBookDetailProps = Partial<
  ExtractPropTypes<ReturnType<typeof secretBookDetailProps>>
>
