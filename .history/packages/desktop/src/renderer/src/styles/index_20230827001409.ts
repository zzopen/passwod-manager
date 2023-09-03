import { createInstance } from 'antd-style'

interface MToken {
  demoColor: string
}

export const { createStyles, ThemeProvider } = createInstance<MToken>({
  key: 'css',
  hashPriority: 'low',
  customToken: {
    demoColor: '#ce1472'
  },
  prefixCls: 'for-demo'
})
