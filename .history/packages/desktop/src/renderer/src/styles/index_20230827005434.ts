interface MToken {
  demoColor: string
}

export const { createStyles, ThemeProvider } = createInstance<MToken>({
  key: 'css',
  hashPriority: 'low',
  customToken: {
    demoColor: '#ce1472'
  },
  prefixCls: 'xl'
})
