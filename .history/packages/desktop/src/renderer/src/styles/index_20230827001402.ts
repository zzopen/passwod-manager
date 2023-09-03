import { createInstance } from 'antd-style'

interface MToken {
  demoColor: string
}

export const { createStyles, ThemeProvider } = createInstance<MToken>({
  key: 'css',
  hashPriority: 'low',
  customToken: {
    primaryColor: '#ce1472',
    demoBgColor: '#f1f2f5'
  },
  prefixCls: 'for-demo'
})
