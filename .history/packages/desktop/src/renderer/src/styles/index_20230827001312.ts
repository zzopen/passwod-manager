import { createInstance } from 'antd-style'

interface ForDemoToken {
  primaryColor: string
  demoBgColor: string
}

export const { createStyles, ThemeProvider } = createInstance<ForDemoToken>({
  key: 'css',
  hashPriority: 'low',
  customToken: {
    primaryColor: '#ce1472',
    demoBgColor: '#f1f2f5'
  },
  prefixCls: 'for-demo'
})
